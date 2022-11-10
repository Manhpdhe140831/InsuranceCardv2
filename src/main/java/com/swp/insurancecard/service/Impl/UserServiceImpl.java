package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.UserDto;
import com.swp.insurancecard.models.ERole;
import com.swp.insurancecard.models.Role;
import com.swp.insurancecard.models.User;
import com.swp.insurancecard.repository.RoleRepository;
import com.swp.insurancecard.repository.UserRepository;
import com.swp.insurancecard.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service @Transactional @Slf4j
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Override
    public String validateUser(UserDto userDto) {
        String result = "";
        if(userRepository.existsByEmail(userDto.getEmail())){
            result += "Email already exists in data, ";
        }
        if(userRepository.existsByUsername(userDto.getUsername())){
            result += "Username already exists in data";
        }
        return result;
    }

    @Override
    public Boolean saveUser(UserDto userDto, String roleAuth, Integer idCheck) {
        if(userDto!=null){
            User user = new User();
            user.setUsername(userDto.getUsername());
            user.setEmail(userDto.getEmail());
            user.setName(userDto.getName());
            user.setPhone(userDto.getPhone());
            user.setDateOfBirth(userDto.getDateOfBirth());
            user.setGender(userDto.getGender());
            user.setAddress(userDto.getAddress());
            user.setPassword(encoder.encode(userDto.getPassword()));
            Set<Role> roles = new HashSet<>();
            if (roleAuth.equalsIgnoreCase("ROLE_ADMIN")){
                Role role = null;
                Optional<Role> optional = roleRepository.findByName(ERole.ROLE_STAFF);
                if (optional.isPresent()) {
                    role = optional.get();
                }
                if (role != null) {
                    roles.add(role);
                }
                user.setRoles(roles);
            } else if (roleAuth.equalsIgnoreCase("ROLE_STAFF")){
                Role role = null;
                Optional<Role> optional = roleRepository.findByName(ERole.ROLE_CUSTOMER);
                if (optional.isPresent()) {
                    role = optional.get();
                }
                if (role != null) {
                    roles.add(role);
                }
                user.setRoles(roles);
            }
            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    public List<UserDto> getAllUserByAdmin() {
        List<User> listRaw = userRepository.getAllByAdmin();
        List<UserDto> list = new ArrayList<>();
        for(User user : listRaw){
            list.add(new UserDto(user));
        }
        return list;
    }

    @Override
    public List<UserDto> getAllUserByStaff() {
        List<User> listRaw = userRepository.getAllByStaff();
        List<UserDto> list = new ArrayList<>();
        for(User user : listRaw){
            list.add(new UserDto(user));
        }
        return list;
    }

    @Override
    public Boolean updateUser(UserDto userDto) {
        if(userDto!=null){
            if(userDto.getId()!=null){
                User user = userRepository.getUserById(userDto.getId());
                if(userDto.getUsername()!=null){
                    user.setUsername(userDto.getUsername());
                }
                if(userDto.getEmail()!=null){
                    user.setEmail(userDto.getEmail());
                }
                if(userDto.getName()!=null){
                    user.setName(userDto.getName());
                }
                if(userDto.getPhone()!=null){
                    user.setPhone(userDto.getPhone());
                }
                if(userDto.getDateOfBirth()!=null){
                    user.setDateOfBirth(userDto.getDateOfBirth());
                }
                if(userDto.getGender()!=null){
                    user.setGender(userDto.getGender());
                }
                if(userDto.getAddress()!=null){
                    user.setAddress(userDto.getAddress());
                }
                userRepository.save(user);
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}
