package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.MotorbikeDto;
import com.swp.insurancecard.service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("api/motorbike")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MotorBikeController {

    @Autowired
    MotorbikeService service;
    @GetMapping(value = "")
    public ResponseEntity<List<MotorbikeDto>> getAll(){
        List<MotorbikeDto> list = service.getAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}
