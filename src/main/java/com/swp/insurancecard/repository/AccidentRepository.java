package com.swp.insurancecard.repository;

import com.swp.insurancecard.dto.AccidentDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AccidentRepository extends PagingAndSortingRepository<AccidentDto, Long> {

    @Query(value = "SELECT a FROM Accident a where " +
            "concat(a.accidentCode, a.description, a.accidentDate)" +
            "like %?1%")
    public Page<AccidentDto> findByField(String key, Pageable pageable);
}
