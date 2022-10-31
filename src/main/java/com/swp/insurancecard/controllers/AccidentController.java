package com.swp.insurancecard.controllers;

import com.swp.insurancecard.dto.AccidentDto;
import com.swp.insurancecard.service.AccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/accident")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccidentController {
    @Autowired
    AccidentService accidentService;

    @GetMapping(value = "")
    public ResponseEntity<List<AccidentDto>> getAll(){
        List<AccidentDto> list = accidentService.getAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping(value = "/search")
    public ResponseEntity<List<AccidentDto>> search(
            @RequestParam("name") String name, @RequestParam("code") String code
    ){
        List<AccidentDto> list = accidentService.searchByNameCode(code, name);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping(value = "/getbyid")
    public ResponseEntity<List<AccidentDto>> getAccidentByUser(@RequestParam("id") Long id){
        List<AccidentDto> list = accidentService.getListAccidentByUserId(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping(value = "/gethistory")
    public ResponseEntity<List<AccidentDto>> getAccidentHistory(@RequestParam("id") Long id){
        List<AccidentDto> list = accidentService.getHistory(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<AccidentDto> save(@RequestBody AccidentDto accidentDto){
        AccidentDto accident = accidentService.save(accidentDto);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }
    @PutMapping(value = "/update")
    public ResponseEntity<AccidentDto> update(@RequestBody AccidentDto accidentDto, @RequestParam("id") Long id){
        AccidentDto accident = accidentService.update(accidentDto, id);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }
    @DeleteMapping(value = "/remove")
    public ResponseEntity<Boolean> remove (@RequestParam("id") Long id){
        boolean result = accidentService.remove(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
