package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.GestionMedical.GestionMedical.model.RDV;

public interface IRDV {

	public void AjouterRDV(RDV rdv);
	public RDV ModifierRDV(RDV rdv);
	public void SupprimerRDV(int id);
	public RDV ConsulterRDV(int id);
	public int GetNombreRDV();
	public List<RDV> VoirListRDV();
	public void ModifierEtatRDV(RDV rdv);
	public Page<RDV> findAllById(int pageNumber, int pageSize);
}
