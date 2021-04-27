package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GestionMedical.GestionMedical.model.Lettre;
import com.GestionMedical.GestionMedical.repository.ILettreDAO;

@Service
public class LettreService {

	@Autowired
	ILettreDAO lettreDAO;
	
	public Lettre ajouterLettre(Lettre lettre) {
		return lettreDAO.save(lettre);
	}
	public void supprimerLettre(int id) {
		Lettre lettre =lettreDAO.findById(id).orElse(null);
		lettreDAO.delete(lettre);
	}
	public Lettre consulterLettre(int id) {
		return lettreDAO.findById(id).orElse(null);
	}
	public List<Lettre> VoirListLettre(){
		return lettreDAO.findAll();
	}
}
