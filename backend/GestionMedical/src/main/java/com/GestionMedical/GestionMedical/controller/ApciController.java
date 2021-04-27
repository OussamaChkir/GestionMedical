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
import com.GestionMedical.GestionMedical.model.Consultation;
import com.GestionMedical.GestionMedical.service.APCIService;

@RestController
@CrossOrigin(origins = "*")
public class ApciController {

	@Autowired
	APCIService apciService;

	// ajouter apci
	@RequestMapping(value = "/ajoutapci", method = RequestMethod.POST)
	public ResponseEntity<?> addapci(@RequestBody APCI apci) throws IOException {
		return ResponseEntity.ok(apciService.ajouterApci(apci));
	}

	// supprimer apci
	@RequestMapping(value = "/annulerapci/{numapci}", method = RequestMethod.DELETE)
	public void annulerapci(@PathVariable int numapci) throws Exception {
		apciService.supprimerapci(numapci);
	}

	// afficher la liste des apcis
	@RequestMapping(value = "/apcis", method = RequestMethod.GET)
	public ResponseEntity<List<APCI>> consulterapci() throws IOException {
		return ResponseEntity.ok(apciService.VoirListApci());
	}

	// get by id
	@RequestMapping(value = "/apci/id", method = RequestMethod.GET)
	public ResponseEntity<APCI> consulterapciById(@PathVariable(value = "id") int id) throws IOException {
		return ResponseEntity.ok(apciService.consulterApci(id));
	}
}
