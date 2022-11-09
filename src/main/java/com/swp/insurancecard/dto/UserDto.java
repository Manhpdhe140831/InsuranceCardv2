package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Role;
import com.swp.insurancecard.models.User;
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


    public UserDto(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.name = user.getName();
        this.phone = user.getName();
        this.dateOfBirth = user.getDateOfBirth();
        this.gender = user.getGender();
        this.address = user.getAddress();
        this.roles = user.getRoles();
    }
}
