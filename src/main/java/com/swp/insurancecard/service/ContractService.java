package com.swp.insurancecard.service;

import com.swp.insurancecard.dto.ContractDto;

import java.util.List;

public interface ContractService {

    List<ContractDto> getAll();

    ContractDto saveContract(ContractDto contract);

    ContractDto updateContract(ContractDto contract, Long id);

    Boolean removeContract(Long id);

    List<ContractDto> getContractByAccountID(Long id);


    List<ContractDto> getContractByFeeContractDate();

    List<ContractDto> findContractByCode(String code);

    ContractDto getContractById(Long id);

    ContractDto renewContract(ContractDto contractDto, Long id);

    List<ContractDto> getPaymentHistory(Long id);
}