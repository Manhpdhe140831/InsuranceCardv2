package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.ContractDto;
import com.swp.insurancecard.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/contract")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContractController {
    @Autowired
    private ContractService contractService;

    @GetMapping(value = "")
    @PreAuthorize("hasRole('CUSTOMER') or hasRole('STAFF') or hasRole('ADMIN')")
    public ResponseEntity<List<ContractDto>> getAll(){
        List<ContractDto> list = contractService.getAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<ContractDto> createContract(@RequestBody ContractDto contractDto){
        ContractDto contract = contractService.saveContract(contractDto);
        return new ResponseEntity<>(contract, HttpStatus.OK);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<Boolean> removeContract(@PathVariable Long id){
        Boolean result = contractService.removeContract(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/update/{id}")
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<ContractDto> updateContract(@RequestBody ContractDto contractDto, @PathVariable Long id){
        ContractDto contract = contractService.updateContract(contractDto, id);
        return new ResponseEntity<>(contract, HttpStatus.OK);
    }
    @PostMapping(value = "/getContractById/{id}")
    @PreAuthorize("hasRole('STAFF') or hasRole('ADMIN') or hasRole('CUSTOMER')")
    public ResponseEntity<ContractDto> getContractByID(@PathVariable Long id){
        ContractDto contract = contractService.getContractById(id);
        return new ResponseEntity<>(contract, HttpStatus.OK);
    }


    @GetMapping(value = "/search/{code}")
    @PreAuthorize("hasRole('STAFF') or hasRole('ADMIN') or hasRole('CUSTOMER')")
    public ResponseEntity<List<ContractDto>> getListContractByCode(@PathVariable String code){

        List<ContractDto> list = contractService.findContractByCode(code);
        return new ResponseEntity<>(list, HttpStatus.OK);

    }

    @GetMapping(value = "/listbyaccountid/{id}")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<List<ContractDto>> getListContractByAccountID(@PathVariable Long id){
        List<ContractDto> list = contractService.getContractByAccountID(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
