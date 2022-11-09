package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.MotorbikeDto;

import java.util.List;

public interface MotorbikeService {


    List<MotorbikeDto> getAll();
    MotorbikeDto getMotorbikeById(Long id);
    Boolean removeMotorbike(Long id);

    MotorbikeDto save(MotorbikeDto motorBikeDto);
}
