package com.GestionMedical.GestionMedical.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.Patient;
import com.GestionMedical.GestionMedical.repository.IPatientDAO;

@Service
public class PatientService implements IPatient {

	@Autowired
    IPatientDAO patientdao;
	

	@Override
	public Patient ajouterPatient(Patient p) {
		// TODO Auto-generated method stub
		return patientdao.save(p);
	}



	@Override
	public Patient modifierPatient(Patient p) {
		// TODO Auto-generated method stub
		Patient pat = new Patient();
		pat.setAdressePatient(p.getAdressePatient());
		pat.setCinPatient(p.getCinPatient());
		pat.setCode_APCI(p.getCode_APCI());
		pat.setConsultationPatient(p.getConsultationPatient());
		pat.setDateNaissancePatient(p.getDateNaissancePatient());
		pat.setCnamPatient(p.getCnamPatient());
		pat.setListRDVPatient(p.getListRDVPatient());
		pat.setListRegelemntPatient(p.getListRegelemntPatient());
		pat.setNomPatient(p.getNomPatient());
		pat.setPrenomPatient(p.getPrenomPatient());
		pat.setProfessionPatient(p.getProfessionPatient());
		pat.setNumeroPatient(p.getNumeroPatient());
		pat.setSexePatient(p.getSexePatient());
		return patientdao.save(pat);
	}



	@Override
	public Patient consulterPatient(int CinPatient) {
		// TODO Auto-generated method stub
		Optional<Patient> p = patientdao.findById(CinPatient);
		if (p.isPresent())
			return p.get();
		return null;
	}



	@Override
	public void supprimerPatient(int numeroPatient) {
		// TODO Auto-generated method stub
		patientdao.deleteById(numeroPatient);
	}



	@Override
	public List<Patient> voirelistePatient() {
		// TODO Auto-generated method stub
		List<Patient> listPatient =  new ArrayList<Patient>();
		patientdao.findAll().forEach(listPatient::add);
		return listPatient;
	}





	@Override
	public int getNombrePatient(int CinPatient) {
		return patientdao.findByCinPatient(CinPatient);
	}




}
