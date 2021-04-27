package com.GestionMedical.GestionMedical.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.GestionMedical.GestionMedical.model.CNAM;

public interface ICNAM {

	public void AjouterCNAM(CNAM cnam);
	public CNAM ModifierCNAM(CNAM cnam);
	public void SupprimerCNAM(int id);
	public CNAM ConsulterCNAM(int id);
	public List<CNAM> VoirListeCNAM();
	public Page<CNAM> findAllById(int pageNumber, int pageSize);
}
