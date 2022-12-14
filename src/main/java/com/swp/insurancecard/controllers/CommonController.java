package com.swp.insurancecard.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.swp.insurancecard.dto.ResponseDto;
import com.swp.insurancecard.dto.UserDto;
import com.swp.insurancecard.models.ERole;
import com.swp.insurancecard.payload.request.LoginRequest;
import com.swp.insurancecard.payload.response.JwtResponse;
import com.swp.insurancecard.repository.UserRepository;
import com.swp.insurancecard.security.jwt.JwtUtils;
import com.swp.insurancecard.security.services.UserDetailsImpl;
import com.swp.insurancecard.service.UserService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.swp.insurancecard.models.Role;
import com.swp.insurancecard.models.User;
import com.swp.insurancecard.payload.request.SignupRequest;
import com.swp.insurancecard.payload.response.MessageResponse;
import com.swp.insurancecard.repository.RoleRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class CommonController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserService userService;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    return ResponseEntity.ok(new JwtResponse(jwt,
                         userDetails.getId(), 
                         userDetails.getUsername(), 
                         userDetails.getEmail(), 
                         roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> saveUser(@RequestBody UserDto userDto, @RequestHeader("Authorization") String authHeader) {
    Claims temp = jwtUtils.getAllClaimsFromToken(authHeader.substring(7));
    String roleCheck = temp.get("role").toString();
    Integer idcheck = Integer.parseInt(temp.get("id").toString());
    String check = userService.validateUser(userDto);
    if (check == "") {
      Boolean result = userService.saveUser(userDto, roleCheck, idcheck);
      return new ResponseEntity<>(result, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(new ResponseDto<>(400, check), HttpStatus.BAD_REQUEST);
    }
  }

//  @PostMapping("/signup")
//  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
//    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
//      return ResponseEntity
//          .badRequest()
//          .body(new MessageResponse("Error: Username is already taken!"));
//    }
//
//    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
//      return ResponseEntity
//          .badRequest()
//          .body(new MessageResponse("Error: Email is already in use!"));
//    }
//
//    // Create new user's account
//    User user = new User(signUpRequest.getUsername(),
//               signUpRequest.getEmail(),
//               encoder.encode(signUpRequest.getPassword()));
//
//    Set<String> strRoles = signUpRequest.getRole();
//    Set<Role> roles = new HashSet<>();
//
//    if (strRoles == null) {
//      Role userRole = roleRepository.findByName(ERole.ROLE_CUSTOMER)
//          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//      roles.add(userRole);
//    } else {
//      strRoles.forEach(role -> {
//        switch (role) {
//        case "admin":
//          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
//              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//          roles.add(adminRole);
//
//          break;
//        case "mod":
//          Role modRole = roleRepository.findByName(ERole.ROLE_STAFF)
//              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//          roles.add(modRole);
//
//          break;
//        default:
//          Role userRole = roleRepository.findByName(ERole.ROLE_CUSTOMER)
//              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//          roles.add(userRole);
//        }
//      });
//    }
//
//    user.setRoles(roles);
//    userRepository.save(user);
//
//    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
//  }
}
