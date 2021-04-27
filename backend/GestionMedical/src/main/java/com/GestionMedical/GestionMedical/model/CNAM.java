package com.GestionMedical.GestionMedical.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

enum TypeCNAM{Assurance_maladie, Assurance_sociales,Accidents_de_travail_et_maladies_pro,date};

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class CNAM {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idCNAM;
	private TypeCNAM typeCNAM;
	private boolean etatCNAM;
	private Date dateValiditeCNAM;
	@OneToMany
	private List<Patient> patientCNAM;
}
