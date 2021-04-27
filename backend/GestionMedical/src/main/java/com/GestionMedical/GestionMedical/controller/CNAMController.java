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
import org.springframework.stereotype.Controller;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.GestionMedical.GestionMedical.model.CNAM;
import com.GestionMedical.GestionMedical.service.ICNAM;

@CrossOrigin(origins="*")
@RestController
@RequestMapping(value="/api")
public class CNAMController {

	@Autowired
	ICNAM cnamService;
	
	@PostMapping(value="/cnam/add")
	public void addCNAM(@RequestBody CNAM cnam) throws IOException {
		cnamService.AjouterCNAM(cnam);
	}
	
	@GetMapping(value="/cnams")
	public ResponseEntity<List<CNAM>> getAllCNAM() throws IOException{
		findByPage(1, 5);
		return ResponseEntity.ok(cnamService.VoirListeCNAM());
	}
	
	@GetMapping(value="/cnam/{id}")
	public ResponseEntity<CNAM> getCNAMById(@PathVariable(value="id") Integer id) 
			throws IOException{
		CNAM cnam = cnamService.ConsulterCNAM(id);
		return ResponseEntity.ok().body(cnam);
	}
	
	@PutMapping(value="/cnam/{id}")
	public ResponseEntity<CNAM> updateCNAM(@RequestBody CNAM cnam, @PathVariable(value="id") Integer id) throws IOException {
		Optional<CNAM> cnamOptional = Optional.of(cnamService.ConsulterCNAM(id));
		if(!cnamOptional.isPresent())
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(cnamService.ModifierCNAM(cnam));
	}
	
	@DeleteMapping(value="/cnam/{id}")
	public void deleteCNAM(@PathVariable(value="id") Integer id) throws IOException{
		cnamService.SupprimerCNAM(id);;
	}
	
    @GetMapping(value="/cnam/page/{page}/{size}")
    public Page<CNAM> findByPage(@RequestParam("page")int page,@RequestParam("size")int size){
    	Page<CNAM> cnamPage= cnamService.findAllById(page, size);
    	return cnamPage;
    }
	
    @InitBinder
    public void initBinder(HttpServletRequest request, ServletRequestDataBinder binder)
    {
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, null,  new CustomDateEditor(dateFormat, true));
    }
}
