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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

enum SexePatient{Male, Female};

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroPatient;
	private int cinPatient;
	private String nomPatient;
	private String prenomPatient;
	private Date dateNaissancePatient;
	private String adressePatient;
	private String professionPatient;
	private SexePatient sexePatient;
	private int code_APCI;
	@OneToMany
	private List<Consultation> consultationPatient;
	@ManyToMany
	@JoinTable(name = "listRDVPatient", 
	  joinColumns = @JoinColumn	(name = "numeroPatient"), 
	  inverseJoinColumns = @JoinColumn(name = "numeroRDV"))
	private List<RDV> listRDVPatient;
	@ManyToOne
	private CNAM cnamPatient;
	@ManyToMany
	@JoinTable(name = "listRegelemntPatient", 
	  joinColumns = @JoinColumn	(name = "numeroPatient"), 
	  inverseJoinColumns = @JoinColumn(name = "numeroRegelemnt"))
	private List<Caisse> listRegelemntPatient;
}
