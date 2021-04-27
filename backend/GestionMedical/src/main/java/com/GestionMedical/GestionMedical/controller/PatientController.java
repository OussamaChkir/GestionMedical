package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GestionMedical.GestionMedical.model.Patient;
import com.GestionMedical.GestionMedical.repository.IPatientDAO;
import com.GestionMedical.GestionMedical.service.PatientService;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class PatientController {
	
	@Autowired
	PatientService patientservice;
	//suprimer
	@DeleteMapping("/{id}")
	void supprimerPatient(@PathVariable int id ) {
	    patientservice.supprimerPatient(id); 
	}
	//ajouter patient
	@RequestMapping(value="/patient/add", method = RequestMethod.POST)
	public void ajouterPatient(@RequestBody Patient patient) {
		patientservice.ajouterPatient(patient);
	}
	
	//modifier patient

	@RequestMapping(value="/patient/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Patient> updatePatient(@PathVariable(value="id") int id, @RequestBody Patient patient) throws IOException{
		System.out.println(id);
		Optional<Patient> patientoptional = Optional.of(patientservice.consulterPatient(id));
		if(!patientoptional.isPresent())
			return ResponseEntity.notFound().build();
		patient.setNumeroPatient(id);
		return ResponseEntity.ok(patientservice.modifierPatient(patient));
	}
	
	//consulter patient par id
	
	@GetMapping(value="/patient/{id}")
	public ResponseEntity<Patient> getPatientParId(@PathVariable String id )throws IOException{
		return ResponseEntity.ok(patientservice.consulterPatient(Integer.parseInt(id)));
	}	
	//consulter tous les patients
	@RequestMapping(value="",method = RequestMethod.GET) 
	public ResponseEntity<List<Patient>> getAllPatient( ) throws IOException{
		return ResponseEntity.ok(patientservice.voirelistePatient());
	}
	///consulter patient par cin
	@GetMapping(value="/{CinPatient}")
	public ResponseEntity<Integer> getnombrePatientParCin(@PathVariable int CinPatient )throws IOException{
		return ResponseEntity.ok(patientservice.getNombrePatient(CinPatient));
	}

	
	


}