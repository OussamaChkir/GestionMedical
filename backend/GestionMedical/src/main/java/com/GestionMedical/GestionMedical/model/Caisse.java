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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Caisse {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroReglemnt;
	private String typeReglemnt;
	private Double montantReglemnt;
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@JsonFormat( pattern = "dd/MM/yyyy")
	private Date dateReglemnt;
	private boolean etatReglemnt;
	@ManyToMany
	@JoinTable(name = "listPatientReglemnt", 
	  joinColumns = @JoinColumn(name = "numeroReglemnt"),	 
	  inverseJoinColumns = @JoinColumn(name = "numeroPatient"))
	private List<Patient> listPatientReglemnt;
}