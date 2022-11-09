package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.dto.CompensationDto;
import com.swp.insurancecard.models.Accident;
import com.swp.insurancecard.models.Compensation;
import com.swp.insurancecard.models.User;
import com.swp.insurancecard.repository.CompensationRepository;
import com.swp.insurancecard.service.CompensationService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
    public boolean save(String code,Boolean status,Date dateRequest, AccidentDto accidentDto) {

        Accident accident = new Accident();
        accident.setId(accidentDto.getId());
        accident.setCode(accidentDto.getCode());
        accident.setImage(accidentDto.getImage());
        accident.setDate(accidentDto.getDate());
        accident.setDescription(accidentDto.getDescription());
        accident.setStatus(accidentDto.isStatus());
        accident.setUser(accidentDto.getUser());

        Compensation compensation = new Compensation();
        compensation.setCode(code);
        compensation.setStatus(false);
        compensation.setDateRequest(dateRequest);
        compensation.setAccident(accident);
        compensation.setUser(accident.getUser());
        if (compensation != null){
            compensationRepository.save(compensation);
            return true;
        }else{
            return false;
        }

    }

    @Override
    public boolean update(Long id, Boolean status, String description, Date dateResponse) {
        Compensation compensation = null;
        Optional<Compensation> optional = compensationRepository.findById(id);
        if (optional.isPresent()){
            compensation = optional.get();
        }
        compensation.setDescription(description);
        compensation.setStatus(true);
        compensation.getDateResponse();
        if (compensation.getDescription().isEmpty() && compensation.isStatus() == true){
            compensationRepository.save(compensation);
            return true;
        }

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
