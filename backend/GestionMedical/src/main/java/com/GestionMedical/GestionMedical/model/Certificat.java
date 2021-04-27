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
public class Certificat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroCertificat;
	private Date dateCertificat;
	private String descriptionCertificat;
	private int nombreJourRepos;
	@OneToOne(cascade = CascadeType.ALL)
	private Consultation consultationCertificat;
}
