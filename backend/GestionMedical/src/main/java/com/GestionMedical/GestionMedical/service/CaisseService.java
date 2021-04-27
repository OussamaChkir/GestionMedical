package com.GestionMedical.GestionMedical.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.Caisse;
import com.GestionMedical.GestionMedical.repository.ICaisseDAO;

@Service
public class CaisseService {

	@Autowired
	ICaisseDAO CaisseDAO;
	
	public Caisse getReglementById(int id) {
		return CaisseDAO.findById(id).orElse(null);
	}
	
	public Caisse ajouterReglement(Caisse caisse) {
	
		
		return CaisseDAO.save(caisse);
	}
	
	public Caisse modifierReglement(Caisse caisse) throws Exception {
		Caisse newCaisse = CaisseDAO.findById(caisse.getNumeroReglemnt()).orElse(null);
		if(newCaisse==null) {
			throw new Exception("Erreur : le reglement n'existe pas !");
		}else {
			newCaisse.setTypeReglemnt(caisse.getTypeReglemnt());
			newCaisse.setMontantReglemnt(caisse.getMontantReglemnt());
			newCaisse.setEtatReglemnt(caisse.isEtatReglemnt());
			newCaisse.setDateReglemnt(caisse.getDateReglemnt());
		}
		return newCaisse;
	}
	
	public void annulerReglement(int numCaisse) throws Exception {
		Caisse caisseToDeleted = CaisseDAO.findById(numCaisse).orElse(null);
		if(caisseToDeleted==null) {
			throw new Exception("Erreur : le reglement n'existe pas !");
		}else {
		CaisseDAO.delete(caisseToDeleted);
	 }
	}
	
	public List<Caisse> consulterReglement(){
		List<Caisse> listCaisse =  new ArrayList<Caisse>();
		CaisseDAO.findAll().forEach(listCaisse::add);
		return  listCaisse;
	}
	
	public List<Caisse> getRapportJour(Date dateJour){
		
		return CaisseDAO.findBydateReglemnt(dateJour);
	}
}
