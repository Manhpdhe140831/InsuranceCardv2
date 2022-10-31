package com.swp.insurancecard.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;

@Table(name = "tbl_motoBike")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Motorbike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "license")
    private String license;
    @Column(name = "model")
    private String model;
    @Column(name = "manufacturer")
    private String manufacturer;
    @Column(name = "color")
    private String color;
    @Column(name = "yearOfMake")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date MFG;
    @Column(name = "frameNumber")
    private String frameNumber;
    @Column(name = "engineNumber")
    private String engineNumber;

    private  String image;


}












