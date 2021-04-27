package com.GestionMedical.GestionMedical.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.GestionMedical.GestionMedical.model.RDV;
import com.GestionMedical.GestionMedical.service.IRDV;
import com.GestionMedical.GestionMedical.service.RDVService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping(value="/api")
public class RDVController {

	@Autowired
	IRDV rdvService;
	
	@PostMapping(value="/rdv/add")
	public void addRDV(@RequestBody RDV rdv) throws IOException {
		rdvService.AjouterRDV(rdv);
	}
	
	@GetMapping(value="/rdvs")
	public ResponseEntity<List<RDV>> getAllRDV() throws IOException{
		//findByPage(1, 5);
		return ResponseEntity.ok(rdvService.VoirListRDV());
	}
	
	@GetMapping(value="/rdv/{id}")
	public ResponseEntity<RDV> getRDVById(@PathVariable(value="id") Integer id) 
			throws IOException{
		RDV rdv = rdvService.ConsulterRDV(id);
		return ResponseEntity.ok().body(rdv);
	}
	
	@PutMapping(value="/rdv/{id}")
	public ResponseEntity<RDV> updateRDV(@RequestBody RDV rdv, @PathVariable(value="id") Integer id) throws IOException {
		Optional<RDV> rdvOptional = Optional.of(rdvService.ConsulterRDV(id));
		if(!rdvOptional.isPresent())
			return ResponseEntity.notFound().build();
		rdv.setNumeroRDV(id);
		return ResponseEntity.ok(rdvService.ModifierRDV(rdv));
	}
	
	@DeleteMapping(value="/rdv/{id}")
	public void deleteRDV(@PathVariable(value="id") Integer id) throws IOException{
		rdvService.SupprimerRDV(id);
	}
	
	@GetMapping(value="/rdv")
	public ResponseEntity<Integer> getRDVNumber() throws IOException{
		return ResponseEntity.ok(rdvService.GetNombreRDV());
	}
	
	@PutMapping(value="/rdv")
	public void updateRDVState(@RequestBody RDV rdv) throws IOException {
		rdvService.ModifierEtatRDV(rdv);
	}
	
    @GetMapping(value="/rdv/page/{page}/{size}")
    public Page<RDV> findByPage(@RequestParam("page")int page,@RequestParam("size")int size){
    	Page<RDV> rdvPage= rdvService.findAllById(page, size);
    	return rdvPage;
    }
	
    @InitBinder
    public void initBinder(HttpServletRequest request, ServletRequestDataBinder binder)
    {
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, null,  new CustomDateEditor(dateFormat, true));
    }
}
