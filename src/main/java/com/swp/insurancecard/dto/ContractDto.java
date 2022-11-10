package com.swp.insurancecard.dto;

import com.swp.insurancecard.models.Contract;
import com.swp.insurancecard.models.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ContractDto {
    private Long id;
    private String code;
    private Date beginDate;
    private Date endDate;
    private Double priceContract;
    private Double FPF;
    private Double SPF;
    private Date FPFDate;
    private Date SPFDate;
    private Date contractDate;

    private String license;

    private String model;

    private String frameNumber;

    private String engineNumber;
    private User accountDto;

    public ContractDto(Contract contract){
        this.setId(contract.getId());
        this.setCode(contract.getCode());
        this.setBeginDate(contract.getBeginDate());
        this.setEndDate(contract.getEndDate());
        this.setPriceContract(contract.getPriceContract());
        this.setFPF(contract.getFPF());
        this.setSPF(contract.getSPF());
        this.setFPFDate(contract.getFPFDate());
        this.setSPF(contract.getSPF());
        this.setContractDate(contract.getContractDate());
        this.setLicense(contract.getLicense());
        this.setModel(contract.getModel());
        this.setEngineNumber(contract.getEngineNumber());
        this.setFrameNumber(contract.getFrameNumber());
        if (null != contract.getAccount()){
            accountDto = new User(contract.getAccount());
        }

    }

    public ContractDto(Double price, Date datePayment){
        this.FPF = price;
        this.FPFDate = datePayment;

    }

    public ContractDto(Long id, String code){
        this.id = id;
        this.code = code;
    }

    public ContractDto(long id, String code, Date beginDate, Date endDate, double priceContract, double FPF, double SPF, Date FPFDate, Date SPFDate, Date contractDate, User accountDto) {
        this.id = id;
        this.code = code;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.priceContract = priceContract;
        this.FPF = FPF;
        this.SPF = SPF;
        this.FPFDate = FPFDate;
        this.SPFDate = SPFDate;
        this.contractDate = contractDate;
        this.accountDto = accountDto;
    }
}

