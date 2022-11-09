package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Motorbike;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter @Setter
public class MotorbikeDto {

    private long id;
    private String license;
    private String model;
    private String manufacturer;
    private String color;
    private Date MFG;
    private String frameNumber;
    private String engineNumber;

    private UserDto accountDto;

    public MotorbikeDto(Motorbike motorBike){
        this.setId(motorBike.getId());
        this.setLicense(motorBike.getLicense());
        this.setModel(motorBike.getModel());
        this.setManufacturer(motorBike.getManufacturer());
        this.setColor(motorBike.getColor());
        this.setMFG(motorBike.getMFG());
        this.setFrameNumber(motorBike.getFrameNumber());
        this.setEngineNumber(motorBike.getEngineNumber());

        if (null != motorBike.getUser()){
            accountDto = new UserDto(motorBike.getUser());
        }
    }

}
