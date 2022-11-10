package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.models.Accident;
import com.swp.insurancecard.models.User;
import com.swp.insurancecard.repository.AccidentRepository;
import com.swp.insurancecard.repository.UserRepository;
import com.swp.insurancecard.service.AccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AccidentServiceImpl implements AccidentService {

    @Autowired
    AccidentRepository accidentRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public List<AccidentDto> getListAccidentByUserId(Long id) {
        if (null != id){
            List<AccidentDto> listResult = new ArrayList<>();
            List<Accident> listAccident = accidentRepository.getListAccidentByCustomerId(id);
            for (Accident itemA: listAccident
            ) {
                listResult.add(new AccidentDto(itemA));
            }
            return listResult;
        }
        return null;
    }

    @Override
    public List<AccidentDto> searchByNameCode(String code, String username) {
        List<Accident> listAccident = accidentRepository.searchListAccident(code, username);
        List<AccidentDto> listResult = new ArrayList<>();
        for (Accident itemA: listAccident
             ) {
            listResult.add(new AccidentDto(itemA));
        }
        return listResult;
    }
//      private Long id;
//    private String code;
//    private String image;
//    private Date date;
//    private String description;
//    private boolean status;
//    private Use
    @Override
    public AccidentDto save(AccidentDto accidentDto) {
        if (null != accidentDto){
            Accident accident = new Accident();
            accident.setCode(accidentDto.getCode());
            accident.setImage(accidentDto.getImage());
            accident.setDate(accidentDto.getDate());
            accident.setDescription(accident.getDescription());
            accident.setStatus(false);
            if (null != accidentDto.getUser()){
                User user = null;
                Optional<User> optional = userRepository.findById(accidentDto.getUser().getId());
                if (optional.isPresent()){
                    user = optional.get();
                }
                accident.setUser(user);
            }
            accident = accidentRepository.save(accident);
            if (null != accident){
                return new AccidentDto(accident);
            }
        }

        return null;
    }

    @Override
    public AccidentDto update(AccidentDto accidentDto, Long id) {
        if (null != accidentDto){
            Accident accident = null;
            if (null != id){
                Optional<Accident> optional = accidentRepository.findById(id);
                if (optional.isPresent()){
                    accident = optional.get();
                }
            }
            if (null != accident){
                accident.setCode(accidentDto.getCode());
                accident.setImage(accidentDto.getImage());
                accident.setDate(accidentDto.getDate());
                accident.setDescription(accidentDto.getDescription());
                accident.setStatus(accidentDto.isStatus());
                if (null != accidentDto.getUser()){
                    User user = null;
                    Optional<User> optional = userRepository.findById(accidentDto.getUser().getId());
                    if (optional.isPresent()){
                        user = optional.get();
                    }

                    accident.setUser(user);
                    accident = accidentRepository.save(accident);
                    return new AccidentDto(accident);
                }else{
                    return null;
                }

            }

        }
        return null;
    }

    @Override
    public boolean remove(Long id) {
        Accident accident = null;
        Optional<Accident> optional = accidentRepository.findById(id);
        if (optional.isPresent()){
            accident = optional.get();
        }
        if (null != accident){
            accidentRepository.delete(accident);
            return true;
        }

        return false;
    }

    @Override
    public List<AccidentDto> getHistory(Long id) {
        List<Accident> listAccident = accidentRepository.getHistory(id);
        List<AccidentDto> listResult = new ArrayList<>();
        for (Accident itemA: listAccident
        ) {
            listResult.add(new AccidentDto(itemA.getCode(), itemA.getDate(),itemA.getDescription()));
        }
        return listResult;
    }

    @Override
    public List<AccidentDto> getAll() {
        List<AccidentDto> listResult = new ArrayList<>();
        List<Accident> listAccident = accidentRepository.findAll();
        for (Accident itemA: listAccident
             ) {
            listResult.add(new AccidentDto(itemA));
        }
        return listResult;
    }


}


