package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.dto.CompensationDto;
import com.swp.insurancecard.service.CompensationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/compensation")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompensationController {
    @Autowired
    CompensationService compensationService;
    @GetMapping(value = "")
    public ResponseEntity<?> getCpmpensation(){
        List<CompensationDto> result = compensationService.getAll();

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @PostMapping(value = "/create")
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<?> saveCompensation(
            @RequestParam("code") String code,@RequestParam("status")  Boolean status,@RequestParam("dateRequest") Date dateRequest,@RequestBody AccidentDto accidentDto
    ){
//        String code,Boolean status,Date dateRequest, AccidentDto accidentDto
        boolean result = compensationService.save(code,status,dateRequest, accidentDto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('STAFF')")
    @PostMapping(value = "/update")
    public ResponseEntity<?> updateCompensation( @RequestParam("id") Long id,
            @RequestParam("code") String code,@RequestParam("status")  Boolean status,@RequestParam("des") String description ,@RequestParam("dateResponse") Date dateResponse
    ){
//        String code,Boolean status,Date dateRequest, AccidentDto accidentDto
        boolean result = compensationService.update(id, status,description, dateResponse);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @GetMapping(value = "/getByUserId")
    @PreAuthorize("hasRole('STAFF') or hasRole('ADMIN') or hasRole('CUSTOMER')")
    public ResponseEntity<?> getCompensationByUserId(@RequestParam("id") Long id){
        List<CompensationDto> list = compensationService.getByUserId(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @GetMapping(value = "/history")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> getHistory(@RequestParam("id") Long id){
        List<CompensationDto> list = compensationService.getHistoryByUserId(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


}
