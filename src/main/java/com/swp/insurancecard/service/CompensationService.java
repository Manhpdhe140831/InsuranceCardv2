package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.dto.CompensationDto;
import com.swp.insurancecard.models.User;

import java.util.Date;
import java.util.List;

public interface CompensationService {

    public List<CompensationDto> getAll();
    public boolean save(String code,Boolean status,Date dateRequest, AccidentDto accidentDto);
    public boolean update( Long id, Boolean status, String description, Date dateResponse);
    public Boolean delete(Long id);
    public List<CompensationDto> getByUserId(Long id);



}
