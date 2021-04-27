package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.Ordonnance;
import com.GestionMedical.GestionMedical.repository.IOrdonnanceDAO;

@Service
public class OrdonnanceService {

	@Autowired
	IOrdonnanceDAO ordonnanceDAO;

	public Ordonnance AjouterOrdonnance(Ordonnance ord) {
		return ordonnanceDAO.save(ord);
	}

	public Ordonnance modifierOrdonnance(Ordonnance ord) {
		Ordonnance newOrd = ordonnanceDAO.findById(ord.getNumeroOrdonnance()).orElse(null);
		if (newOrd != null) {
			newOrd.setDateOrdonnance(ord.getDateOrdonnance());
			newOrd.setTypeOrdonnance(ord.getTypeOrdonnance());
		}
		return newOrd;
	}

	public void supprimerOrdonnance(int id) {
		Ordonnance ord = ordonnanceDAO.findById(id).orElse(null);
		ordonnanceDAO.delete(ord);
	}
	
	public List<Ordonnance> voirListeOrdonnance(){
		return ordonnanceDAO.findAll();
	}
	
	public Ordonnance consulterOrdonnance(int id) {
		return ordonnanceDAO.findById(id).orElse(null);
	}
}
