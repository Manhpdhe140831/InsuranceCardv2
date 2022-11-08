package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Compensation;
import com.swp.insurancecard.models.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CompensationDto {
    private long id;
    private String code;
    private boolean status;
    private String description;
    private Date dateRequest;
    private Date dateResponse;
    private User user;
    private AccidentDto accidentDto;

    public CompensationDto(Compensation compensation){
        if (compensation != null)
        this.setId(compensation.getId());
        this.setCode(compensation.getCode());
        this.setStatus(compensation.isStatus());
        this.setDescription(compensation.getDescription());
        this.setDateRequest(compensation.getDateRequest());
        this.setDateResponse(compensation.getDateResponse());
        if (null != compensation.getUser()){
            user = new User(compensation.getUser());
        }
        if (null != compensation.getAccident()){
            accidentDto = new AccidentDto(compensation.getAccident());
        }
    }

    public CompensationDto(String code, boolean status, Date dateRequest, User user, AccidentDto accidentDto) {
        this.code = code;
        this.status = status;
        this.dateRequest = dateRequest;
        this.user = user;
        this.accidentDto = accidentDto;
    }
}
