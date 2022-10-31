package com.swp.insurancecard.repository;

import com.swp.insurancecard.models.Accident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccidentRepository extends JpaRepository<Accident, Long> {

    @Query(value = "SELECT a from Accident a where a.user.id =?1")
    public List<Accident> getListAccidentByCustomerId(Long id);

    @Query(value = "SELECT a From Accident a where a.code = ?1 or a.user.username = ?2")
    public List<Accident> searchListAccident(String code, String username);

    @Query(value = "SELECT a from Accident a where a.user.id = ?1")
    public List<Accident> getHistory(Long id);
}
