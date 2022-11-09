package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.MotorbikeDto;
import com.swp.insurancecard.models.Motorbike;
import com.swp.insurancecard.repository.MotorbikeRepository;
import com.swp.insurancecard.service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MotorbikeServiceImpl implements MotorbikeService {

@Autowired
    MotorbikeRepository repository;
    @Override
    public List<MotorbikeDto> getAll() {
        List<MotorbikeDto> list = new ArrayList<>();
        List<Motorbike> listMotorbike = repository.findAll();
        for (Motorbike item: listMotorbike
        ) {
            list.add(new MotorbikeDto(item));
        }
        return list;
    }

    @Override
    public MotorbikeDto getMotorbikeById(Long id) {
        return null;
    }

    @Override
    public Boolean removeMotorbike(Long id) {
        return null;
    }

    @Override
    public MotorbikeDto save(MotorbikeDto motorBikeDto) {
        return null;
    }
}
