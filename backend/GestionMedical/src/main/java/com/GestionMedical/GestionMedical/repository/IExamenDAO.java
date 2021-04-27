package com.GestionMedical.GestionMedical.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.GestionMedical.GestionMedical.model.Examen;

public interface IExamenDAO extends JpaRepository<Examen, Integer>{
	

}
