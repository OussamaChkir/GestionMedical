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

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

enum TypeUtilisateur{ Medecin, Secretaire}

@Entity
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Utilisateur {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idUtilisateur;
	private String typeUtilisateur;
	private String nomUtilisateur;
	private String loginUtilisateur;
	@JsonIgnore
	private String pwsUtilisateur;
	@CreationTimestamp
	private Date dateAjoutUtilisateur;
	@ManyToMany
	@JoinTable(name = "listConsultationUtilisateur", 
	  joinColumns = @JoinColumn	(name = "idUtilisateur"), 
	  inverseJoinColumns = @JoinColumn(name = "numeroConsultation"))
	private List<Consultation> listConsultationUtilisateur;
}
