package com.GestionMedical.GestionMedical.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.CNAM;
import com.GestionMedical.GestionMedical.model.RDV;
import com.GestionMedical.GestionMedical.repository.IRDVDAO;

@Service
public class RDVService implements IRDV {

	@Autowired
	IRDVDAO rdvDao;
	
	@Override
	public void AjouterRDV(RDV rdv) {
		// TODO Auto-generated method stub
		rdvDao.save(rdv);
	}

	@Override
	public RDV ModifierRDV(RDV rdv) {
		// TODO Auto-generated method stub
		return rdvDao.save(rdv);
	}

	@Override
	public void SupprimerRDV(int id) {
		// TODO Auto-generated method stub
		rdvDao.deleteById(id);
	}

	@Override
	public RDV ConsulterRDV(int id) {
		// TODO Auto-generated method stub
		Optional<RDV> rdv = rdvDao.findById(id);
		if(rdv.isPresent())
			return rdv.get();
		return null;
	}

	@Override
	public int GetNombreRDV() {
		// TODO Auto-generated method stub
		return (int) rdvDao.count();
	}

	@Override
	public List<RDV> VoirListRDV() {
		// TODO Auto-generated method stub
		List<RDV> listRDV = new ArrayList<RDV>();
		rdvDao.findAll().forEach(listRDV::add);
		if(listRDV != null)
			return listRDV;
		return null;
	}

	@Override
	public void ModifierEtatRDV(RDV rdv) {
		// TODO Auto-generated method stub
		//rdvDao.ModifierEtatRDV(rdv);
	}

	@SuppressWarnings("deprecation")
	@Override
	public Page<RDV> findAllById(int pageNumber, int pageSize) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber - 1, pageSize);
		return this.rdvDao.findAll(pageable);
	}
}
