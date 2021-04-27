package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GestionMedical.GestionMedical.model.Examen;
import com.GestionMedical.GestionMedical.repository.IExamenDAO;

@Service
public class ExamenService {

	@Autowired
	IExamenDAO examenDAO;
	
	public Examen ajouterexamen(Examen examen) {
		return examenDAO.save(examen);
	}
	public void supprimerexamen(int id) {
		Examen examen =examenDAO.findById(id).orElse(null);
		examenDAO.delete(examen);
	}
	public Examen consulterexamen(int id) {
		return examenDAO.findById(id).orElse(null);
	}
	public List<Examen> VoirListexamen(){
		return examenDAO.findAll();
	}
	
	
}
