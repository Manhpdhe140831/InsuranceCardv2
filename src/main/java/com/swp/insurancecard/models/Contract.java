package com.swp.insurancecard.models;

import lombok.NoArgsConstructor;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
@Table(name = "tbl_contract")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "code")
    private String code;
    @Column(name = "contractBeginDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date beginDate;
    @Column(name = "contractEndDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date endDate;
    @Column(name = "priceContract")
    private double priceContract;
    @Column(name = "firstPaymentFee")
    private double FPF;
    @Column(name = "secondPaymentFee")
    private double SPF;
    @Column(name = "firstPaymentDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date FPFDate;
    @Column(name = "secondPaymentDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date SPFDate;
    @Column(name = "contractDate")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date contractDate;

    @Column(name = "license")
    private String license;
    @Column(name = "model")
    private String model;
    @Column(name = "frameNumber")
    private String frameNumber;
    @Column(name = "engineNumber")
    private String engineNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private User account;


}
