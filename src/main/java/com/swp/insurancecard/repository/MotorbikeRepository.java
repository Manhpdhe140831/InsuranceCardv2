package com.swp.insurancecard.repository;

import com.swp.insurancecard.models.Motorbike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotorbikeRepository extends JpaRepository<Motorbike, Long> {

}
