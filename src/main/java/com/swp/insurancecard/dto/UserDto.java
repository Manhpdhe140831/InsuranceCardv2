package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Role;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String name;
    private String phone;
    private Date dateOfBirth;
    private String gender;
    private String address;
    private Set<Role> roles = new HashSet<>();



}
