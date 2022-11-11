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
    private String code;
    private String image;
    private Date date;
    private String description;
    private User user;

    public AccidentDto(Accident accident){
        this.setId(accident.getId());
        this.setDate(accident.getDate());
        this.setImage(accident.getImage());
        this.setCode(accident.getCode());
        this.setDescription(accident.getDescription());
        if (accident.getUser() != null){
            user = new User(accident.getUser());
        }
    }

    public AccidentDto (String code, Date date, String description){
        this.setCode(code);
        this.setDate(date);
        this.setDescription(description);
    }

}
