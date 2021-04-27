package com.GestionMedical.GestionMedical.service;

import java.util.List;

import com.GestionMedical.GestionMedical.model.Utilisateur;

public interface IUtlisateur {
	
	public void AjouterUtilisateur(Utilisateur user);
	
	public Utilisateur ModifierUtilisateur(Utilisateur user);
	
	public void SupprimerUtilisateur(int id);
	
	public Utilisateur ConsulterUtilisateur(int id);
	
	public List<Utilisateur> VoirListeUtilisateur() ;
	
	
}
