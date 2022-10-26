package com.swp.insurancecard.repository;

import com.swp.insurancecard.models.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract, Long> {

}
