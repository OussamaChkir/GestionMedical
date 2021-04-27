package com.GestionMedical.GestionMedical.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.GestionMedical.GestionMedical.model.Certificat;

public interface ICertificatDAO extends JpaRepository<Certificat, Integer>{
	

}
