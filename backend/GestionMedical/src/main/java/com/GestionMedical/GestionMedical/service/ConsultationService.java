package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.Consultation;
import com.GestionMedical.GestionMedical.repository.IConsultationDAO;
@Service
public class ConsultationService {

	@Autowired
	IConsultationDAO ConsultationDAO;
	
	public Consultation ajouterConsultation(Consultation cons) {
		
		return ConsultationDAO.save(cons);
	}
	
	public Consultation modifierConsultation(Consultation cons) throws Exception {
		Consultation newCons =ConsultationDAO.findById(cons.getNumeroConsultation()).orElse(null);
		if(newCons==null) {
			throw new Exception("Erreur : la consultation n'existe pas !");
		}else {
		newCons.setDateConsultation(cons.getDateConsultation());
		newCons.setDescriptionConsultation(cons.getDescriptionConsultation());
		newCons.setEtatConsultation(cons.isEtatConsultation());
		}
		
		return newCons;
	}
	public void supprimerConsultation(int id) {
		Consultation consultation =ConsultationDAO.findById(id).orElse(null);
		ConsultationDAO.delete(consultation);
	}
	
	public Consultation consulterConsultation(int id){
	
		return ConsultationDAO.findById(id).orElse(null);
	}
	
	public List<Consultation> voirListeConsultation() {
		
		return ConsultationDAO.findAll();
	}
	
	public int getNombreConsultation() {
		
		return ConsultationDAO.findAll().size();
	}
	
}
