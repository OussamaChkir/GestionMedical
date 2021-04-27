package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GestionMedical.GestionMedical.model.Consultation;
import com.GestionMedical.GestionMedical.model.Ordonnance;
import com.GestionMedical.GestionMedical.service.OrdonnanceService;

@RestController
@CrossOrigin(origins = "*")
public class OrdonnanceController {

	@Autowired
	OrdonnanceService ordonnanceService;

	// ajouter une ordonnance
	@RequestMapping(value = "/ajoutordonnance", method = RequestMethod.POST)
	public ResponseEntity<?> addordonnance(@RequestBody Ordonnance ord) throws IOException {
		return ResponseEntity.ok(ordonnanceService.AjouterOrdonnance(ord));
	}

	// modifier une ordonnance
	@RequestMapping(value = "/modifierordonnance/id", method = RequestMethod.PUT)
	public ResponseEntity<?> modifierordonnace(@PathVariable(value = "id") int id, @RequestBody Ordonnance ord)
			throws Exception {
		Optional<Ordonnance> ordonnanceoptional = Optional.of(ordonnanceService.consulterOrdonnance(id));
		if (!ordonnanceoptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(ordonnanceService.modifierOrdonnance(ord));
	}

	// supprimer une ordonnance
	@RequestMapping(value = "/annulerordonnance/{numord}", method = RequestMethod.DELETE)
	public void annulerordonnace(@PathVariable int numord) throws Exception {
		ordonnanceService.supprimerOrdonnance(numord);
	}

	// afficher la liste des ordonnances
	@RequestMapping(value = "/ordonnances", method = RequestMethod.GET)
	public ResponseEntity<List<Ordonnance>> consulterReglement() throws IOException {
		return ResponseEntity.ok(ordonnanceService.voirListeOrdonnance());
	}

	// get by id
	@RequestMapping(value = "/ordonnance/id", method = RequestMethod.GET)
	public ResponseEntity<Ordonnance> consulterReglementById(@PathVariable(value = "id") int id) throws IOException {
		return ResponseEntity.ok(ordonnanceService.consulterOrdonnance(id));
	}

}
