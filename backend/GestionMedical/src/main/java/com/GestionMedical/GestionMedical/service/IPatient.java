package com.GestionMedical.GestionMedical.service;

import java.util.List;

import com.GestionMedical.GestionMedical.model.Patient;

public interface IPatient {
	
	public Patient ajouterPatient(Patient p);
	public Patient modifierPatient(Patient p);
	public Patient consulterPatient(int NumeroPatient) ;
	public void supprimerPatient(int NumeroPatient);
	public List<Patient> voirelistePatient();
	public int getNombrePatient(int CinPatient);
	
}
