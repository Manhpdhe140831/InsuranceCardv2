package com.swp.insurancecard.models;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.BitSet;
import java.util.Date;
import java.util.List;

public class Accident {
    private Long id;
    private List<String> urlImageAccident;
    private Date accidentDate;
    private String description;
    private boolean status;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
