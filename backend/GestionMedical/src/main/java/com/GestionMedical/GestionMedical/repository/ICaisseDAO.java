package com.GestionMedical.GestionMedical.repository;

import java.util.Date;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.GestionMedical.GestionMedical.model.Caisse;

public interface ICaisseDAO extends CrudRepository<Caisse, Integer>{
	List<Caisse> findBydateReglemnt(Date dateReglemnt);
}
