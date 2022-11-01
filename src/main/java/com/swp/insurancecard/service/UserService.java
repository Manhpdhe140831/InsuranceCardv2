package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.UserDto;

public interface UserService {
    String validateUser(UserDto userDto);
    Boolean saveUser(UserDto userDto,String roleAuth, Integer idcheck);
}
