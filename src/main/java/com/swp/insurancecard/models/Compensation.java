package com.swp.insurancecard.models;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.util.Date;

public class Compensation {
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
