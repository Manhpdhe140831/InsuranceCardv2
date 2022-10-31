package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.models.Accident;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccidentService {

    public List<AccidentDto> getListAccidentByUserId(Long id);

    public List<AccidentDto> searchByNameCode(String code, String username);

    public AccidentDto save(AccidentDto accidentDto);

    public AccidentDto update(AccidentDto accidentDto, Long id);

    public boolean remove(Long id);

    public List<AccidentDto> getHistory(Long id);

    public List<AccidentDto> getAll();






}
