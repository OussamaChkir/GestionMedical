package com.GestionMedical.GestionMedical.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class APCI {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroAPCI;
	private String nomAPCI;
	private Date dateAPCI;
	@OneToOne(cascade = CascadeType.ALL)
	private Consultation consultation;
	
}
