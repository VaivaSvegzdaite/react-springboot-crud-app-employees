package com.example.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

//	List<Employee> findByLastName(String lastName, Pageable pageable);

//	Page<Employee> findAll(Pageable pageable);

}
