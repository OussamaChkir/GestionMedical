package com.GestionMedical.GestionMedical.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.GestionMedical.GestionMedical.model.Patient;

public interface IPatientDAO extends JpaRepository<Patient, Integer>{

	int findByCinPatient(int cinPatient);
	

}
