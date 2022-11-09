package com.swp.insurancecard.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swp.insurancecard.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

  @Query(value = "select a.* from users a, user_roles b where a.id = b.user_id and b.role_id != 1", nativeQuery = true)
  List<User> getAllByAdmin();

  @Query(value = "select a.* from users a, user_roles b where a.id = b.user_id and b.role_id = 3", nativeQuery = true)
  List<User> getAllByStaff();
}
