package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.util.Date;
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

import com.GestionMedical.GestionMedical.model.Caisse;
import com.GestionMedical.GestionMedical.model.Consultation;
import com.GestionMedical.GestionMedical.service.ConsultationService;

@RestController
@CrossOrigin(origins = "*")
public class ConsultationController {

	@Autowired
	ConsultationService consultationService;

	// ajouter un consultation
	@RequestMapping(value = "/ajoutconsultation", method = RequestMethod.POST)
	public ResponseEntity<?> addCaisse(@RequestBody Consultation cons) throws IOException {
		return ResponseEntity.ok(consultationService.ajouterConsultation(cons));
	}

	// modifier la consultation
	@RequestMapping(value = "/modifierconsultation/id", method = RequestMethod.PUT)
	public ResponseEntity<?> modifierReglement(@PathVariable(value = "id") int id, @RequestBody Consultation cons)
			throws Exception {
		Optional<Consultation> consultationoptional = Optional.of(consultationService.consulterConsultation(id));
		if (!consultationoptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(consultationService.modifierConsultation(cons));
	}

	// supprimer un reglement
	@RequestMapping(value = "/annulerconsultation/{numcons}", method = RequestMethod.DELETE)
	public void annulerReglement(@PathVariable int numcons) throws Exception {
		consultationService.supprimerConsultation(numcons);
	}

	// afficher la liste des consultations
	@RequestMapping(value = "/consultations", method = RequestMethod.GET)
	public ResponseEntity<List<Consultation>> consulterReglement() throws IOException {
		return ResponseEntity.ok(consultationService.voirListeConsultation());
	}

	// get by id
	@RequestMapping(value = "/consultation/id", method = RequestMethod.GET)
	public ResponseEntity<Consultation> consulterReglementById(@PathVariable(value = "id") int id) throws IOException {
		return ResponseEntity.ok(consultationService.consulterConsultation(id));
	}

	// get nombre consultation
	@RequestMapping(value = "/nbrconsultation", method = RequestMethod.GET)
	public ResponseEntity<Integer> getRapportJour() {

		return ResponseEntity.ok(consultationService.getNombreConsultation());
	}
}
