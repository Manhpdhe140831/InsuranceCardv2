package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.ResponseDto;
import com.swp.insurancecard.dto.UserDto;
import com.swp.insurancecard.security.jwt.JwtUtils;
import com.swp.insurancecard.service.UserService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserService userService;

    @GetMapping("/user")
    @PreAuthorize("hasRole('STAFF') or hasRole('ADMIN')")            
    public ResponseEntity<?> getAllUser(@RequestHeader("Authorization") String authHeader){
        Claims temp = jwtUtils.getAllClaimsFromToken(authHeader.substring(7));
        String role = temp.get("role").toString();
        Integer idcheck = Integer.parseInt(temp.get("id").toString());
        List<UserDto> list = new ArrayList<>();
        if(role.equalsIgnoreCase("ROLE_ADMIN")){
            list = userService.getAllUserByAdmin();
        } else if (role.equalsIgnoreCase("ROLE_STAFF")){
            list = userService.getAllUserByStaff();
        } else{
            return null;
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PutMapping("/user/update")
    @PreAuthorize("hasRole('STAFF') or hasRole('ADMIN')")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto){
        String check = userService.validateUser(userDto);
        if (check == "") {
            Boolean result = userService.updateUser(userDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseDto<>(400, check), HttpStatus.BAD_REQUEST);
        }
    }
}
