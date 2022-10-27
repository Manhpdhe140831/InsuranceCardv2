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
    private long id;
    private String code;
    private Date beginDate;
    private Date endDate;
    private double priceContract;
    private double FPF;
    private double SPF;
    private Date FPFDate;
    private Date SPFDate;
    private Date contractDate;
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
        if (null != contract.getAccount()){
            accountDto = new User(contract.getAccount());
        }

    }
}

