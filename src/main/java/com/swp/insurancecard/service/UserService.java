package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.UserDto;

import java.util.List;

public interface UserService {
    String validateUser(UserDto userDto);
    Boolean saveUser(UserDto userDto,String roleAuth, Integer idcheck);

    List<UserDto> getAllUserByAdmin();

    List<UserDto> getAllUserByStaff();
}
