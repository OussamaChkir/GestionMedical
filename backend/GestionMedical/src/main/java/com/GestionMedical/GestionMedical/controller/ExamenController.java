package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GestionMedical.GestionMedical.model.APCI;
import com.GestionMedical.GestionMedical.model.Examen;
import com.GestionMedical.GestionMedical.service.ExamenService;

@RestController
@CrossOrigin(origins = "*")
public class ExamenController {

	@Autowired
	ExamenService examenService;

	// ajouter exam
	@RequestMapping(value = "/ajoutexamen", method = RequestMethod.POST)
	public ResponseEntity<?> addexamen(@RequestBody Examen examen) throws IOException {
		return ResponseEntity.ok(examenService.ajouterexamen(examen));
	}

	// supprimer exam
	@RequestMapping(value = "/annulerexamen/{numexam}", method = RequestMethod.DELETE)
	public void annulerexam(@PathVariable int numexam) throws Exception {
		examenService.supprimerexamen(numexam);
	}

	// afficher la liste des exams
	@RequestMapping(value = "/examens", method = RequestMethod.GET)
	public ResponseEntity<List<Examen>> consulterexam() throws IOException {
		return ResponseEntity.ok(examenService.VoirListexamen());
	}

	// get by id
	@RequestMapping(value = "/examen/id", method = RequestMethod.GET)
	public ResponseEntity<Examen> consulterExamenById(@PathVariable(value = "id") int id) throws IOException {
		return ResponseEntity.ok(examenService.consulterexamen(id));
	}
}
