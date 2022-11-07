package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.dto.CompensationDto;
import com.swp.insurancecard.models.Compensation;
import com.swp.insurancecard.models.User;
import com.swp.insurancecard.repository.CompensationRepository;
import com.swp.insurancecard.service.CompensationService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CompensationServiceImpl implements CompensationService {
    @Autowired
    CompensationRepository compensationRepository;


    @Override
    public List<CompensationDto> getAll() {
        List<CompensationDto> list = new ArrayList<>();
        List<Compensation> listCompensation = compensationRepository.findAll();
        for (Compensation itemC: listCompensation
             ) {
            list.add(new CompensationDto(itemC));
        }
        return list;
    }

    @Override
    public boolean save(String code, Date dateRequest, User user, AccidentDto accidentDto) {
        return false;
    }

    @Override
    public boolean update(String code, boolean status, String description, Date dateResponse) {
        return false;
    }

    @Override
    public Boolean delete(Long id) {
        return null;
    }

    @Override
    public List<CompensationDto> getByUserId(Long id) {
        return null;
    }
}
