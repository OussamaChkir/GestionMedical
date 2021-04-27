package com.GestionMedical.GestionMedical.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Consultation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numeroConsultation;
	private Date dateConsultation;
	private String descriptionConsultation;
	private boolean etatConsultation;
	@OneToOne(cascade = CascadeType.ALL)
	private APCI APCIConsultation;
	@OneToMany
	private List<Ordonnance> OrdonnanceConsultation;
	@OneToOne(cascade = CascadeType.ALL)
	private Lettre lettreConsultation;
	@ManyToMany
	@JoinTable(name = "listUtilisateurConsultation", 
			  joinColumns = @JoinColumn	(name = "numeroConsultation"), 
			  inverseJoinColumns = @JoinColumn(name = "idUtilisateur"))
	private List<Utilisateur> listUtilisateurConsultation;
	@ManyToOne
	private Patient patientConsultation;
	@OneToOne(cascade = CascadeType.ALL)
	private Certificat certificatConsultation;
	@OneToMany
	private List<Examen> listExamenConsultation;
}
