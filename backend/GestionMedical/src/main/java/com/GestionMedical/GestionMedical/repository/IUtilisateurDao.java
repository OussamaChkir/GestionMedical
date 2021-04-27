package com.GestionMedical.GestionMedical.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.GestionMedical.GestionMedical.model.Utilisateur;


@Repository
public interface IUtilisateurDao extends CrudRepository<Utilisateur, Integer>{
	Utilisateur findByloginUtilisateur(String loginUtilisateur);
}
