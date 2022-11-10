package com.swp.insurancecard.repository;

import com.swp.insurancecard.models.Compensation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CompensationRepository extends JpaRepository<Compensation, Long> {

    @Query(value = "select c from Compensation c where c.user.id = ?1")
    List<Compensation> getCompensationByUserId(Long id);


}
