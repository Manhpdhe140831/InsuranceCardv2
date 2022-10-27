package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Accident;
import com.swp.insurancecard.models.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class AccidentDto {
    private Long id;
    private String accidentCode;
    private String urlImageAccident;
    private Date accidentDate;
    private String description;
    private boolean status;
    private User user;

    public AccidentDto(Accident accident){
        this.setId(accident.getId());
        this.setAccidentDate(accident.getAccidentDate());
        this.setUrlImageAccident(accident.getUrlImageAccident());
        this.setAccidentCode(accident.getAccidentCode());
        this.setDescription(accident.getDescription());
        this.setStatus(accident.isStatus());
        if (accident.getUser() != null){
            user = new User(accident.getUser());
        }
    }
}
