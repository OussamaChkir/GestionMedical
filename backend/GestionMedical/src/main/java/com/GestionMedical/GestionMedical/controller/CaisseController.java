package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.GestionMedical.GestionMedical.model.Caisse;
import com.GestionMedical.GestionMedical.repository.ICaisseDAO;
import com.GestionMedical.GestionMedical.service.CaisseService;

@RestController
@CrossOrigin(origins = "*")
public class CaisseController {

	@Autowired
	CaisseService caisseService;

	// ajouter un reglement
	@RequestMapping(value = "/ajoutReglement", method = RequestMethod.POST)
	public ResponseEntity<?> addCaisse(@RequestBody Caisse caisse) throws IOException {
		return ResponseEntity.ok(caisseService.ajouterReglement(caisse));
	}

	// modifier le reglement
	@RequestMapping(value = "/modifierReglement/id", method = RequestMethod.PUT)
	public ResponseEntity<?> modifierReglement(@PathVariable(value="id") int id, @RequestBody Caisse caisse) throws Exception {
		Optional<Caisse> caisseoptional = Optional.of(caisseService.getReglementById(id));
		if(!caisseoptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(caisseService.modifierReglement(caisse));
	}

	// supprimer un reglement
	@RequestMapping(value = "/annulerReglement/{numCaisse}", method = RequestMethod.DELETE)
	public void annulerReglement(@PathVariable int numCaisse) throws Exception {
		caisseService.annulerReglement(numCaisse);
	}

	// afficher la liste des reglements
	@RequestMapping(value = "/reglements", method = RequestMethod.GET)
	public ResponseEntity<List<Caisse>> consulterReglement() throws IOException {
		return ResponseEntity.ok(caisseService.consulterReglement());
	}
	
	//get by id
	@RequestMapping(value = "/reglement/id", method = RequestMethod.GET)
	public ResponseEntity<Caisse> consulterReglementById(@PathVariable(value="id") int id) throws IOException {
		return ResponseEntity.ok(caisseService.getReglementById(id));
	}
	
	//afficher les rapport par jours
	@RequestMapping(value = "/rapportParJour/{dateJour}", method = RequestMethod.GET)
	public ResponseEntity<List<Caisse>> getRapportJour(@PathVariable Date dateJour){
		
		return ResponseEntity.ok(caisseService.getRapportJour(dateJour));
	}

}
