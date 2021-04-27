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
import com.GestionMedical.GestionMedical.model.Lettre;
import com.GestionMedical.GestionMedical.service.LettreService;

@RestController
@CrossOrigin(origins = "*")
public class LettreController {

	@Autowired
	LettreService lettreService;

	// ajouter lettre
	@RequestMapping(value = "/ajoutlettre", method = RequestMethod.POST)
	public ResponseEntity<?> addlettre(@RequestBody Lettre lettre) throws IOException {
		return ResponseEntity.ok(lettreService.ajouterLettre(lettre));
	}

	// supprimer lettre
	@RequestMapping(value = "/annulerlettre/{numalettre}", method = RequestMethod.DELETE)
	public void annulerlettre(@PathVariable int numalettre) throws Exception {
		lettreService.supprimerLettre(numalettre);
	}

	// afficher la liste des lettres
	@RequestMapping(value = "/lettres", method = RequestMethod.GET)
	public ResponseEntity<List<Lettre>> consulterlettre() throws IOException {
		return ResponseEntity.ok(lettreService.VoirListLettre());
	}

	// get by id
	@RequestMapping(value = "/lettre/id", method = RequestMethod.GET)
	public ResponseEntity<Lettre> consulterlettreById(@PathVariable(value = "id") int id) throws IOException {
		return ResponseEntity.ok(lettreService.consulterLettre(id));
	}
}
