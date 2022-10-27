package com.swp.insurancecard.service.Impl;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.repository.AccidentRepository;
import com.swp.insurancecard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class AccidentServiceImpl {
    @Autowired
    AccidentRepository accidentRepository;
    @Autowired
    UserRepository userRepository;

    public Page<AccidentDto> listAll(int pageNumber, String sortField, String sortDir, String keyword){
        Sort sort = Sort.by(sortField);
        sort = sortDir.equals("asc")? sort.ascending() : sort.descending();
        Pageable pageable = PageRequest.of(pageNumber-1,6, sort);
        if (null != keyword){
            return accidentRepository.findByField(keyword, pageable);
        }
        return null;
    }
}
