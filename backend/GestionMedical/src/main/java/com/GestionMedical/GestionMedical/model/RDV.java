package com.GestionMedical.GestionMedical.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class RDV {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroRDV;
	private String presenceRDV;
	private Date dateRDV;
	private boolean validateRDV;
	private boolean etatRDV;
	@ManyToMany
	@JoinTable(name = "listPatientRDV", 
	  joinColumns = @JoinColumn	(name = "numeroRDV"), 
	  inverseJoinColumns = @JoinColumn(name = "numeroPatient"))
	private List<Patient> listPatientRDV;
}
