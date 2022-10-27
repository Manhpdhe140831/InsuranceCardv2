package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.service.Impl.AccidentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class AccidentController {
    @Autowired
    AccidentServiceImpl service;
    @GetMapping("/page/{pageNumber}")
    public ResponseEntity<Page<AccidentDto>> listPage(@PathVariable("pageNumber") int currentPage, @Param("sortField") String sortField, @Param("sortDir") String sortDir, @Param("keyword") String keyWord){
        Page<AccidentDto> page = service.listAll(currentPage, sortField, sortDir, keyWord);
        return new ResponseEntity<>(page, HttpStatus.OK);
    }




}
