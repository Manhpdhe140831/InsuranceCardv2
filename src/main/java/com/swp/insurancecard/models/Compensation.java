package com.swp.insurancecard.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter@Setter
public class Compensation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String code;
    private boolean status;
    private String description;
    private Date dateRequest;
    private Date dateResponse;

    @ManyToOne()
    @JoinColumn()
    private User user;

    @OneToOne()
    @JoinColumn()
    private Accident accident;

}
