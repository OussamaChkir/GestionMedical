package com.GestionMedical.GestionMedical.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Examen {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroExamen;
	private Date dateExamen;
	private String descriptionExamen;
	@ManyToOne
	private Consultation consultationExamen;
}
