package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.APCI;
import com.GestionMedical.GestionMedical.repository.IAPCIDAO;

@Service
public class APCIService {

	@Autowired
	IAPCIDAO apciDAO;
	
	public APCI ajouterApci(APCI apci) {
		return apciDAO.save(apci);
	}
	public void supprimerapci(int id) {
		APCI apci =apciDAO.findById(id).orElse(null);
		apciDAO.delete(apci);
	}
	public APCI consulterApci(int id) {
		return apciDAO.findById(id).orElse(null);
	}
	public List<APCI> VoirListApci(){
		return apciDAO.findAll();
	}
}
