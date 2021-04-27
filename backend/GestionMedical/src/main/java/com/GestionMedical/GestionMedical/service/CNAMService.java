package com.GestionMedical.GestionMedical.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;

import com.GestionMedical.GestionMedical.model.CNAM;
import com.GestionMedical.GestionMedical.repository.ICNAMDAO;

@Service
public class CNAMService implements ICNAM {

	@Autowired
	ICNAMDAO cnamDao;

	@Override
	public void AjouterCNAM(CNAM cnam) {
		// TODO Auto-generated method stub
		cnamDao.save(cnam);
	}

	@Override
	public CNAM ModifierCNAM(CNAM cnam) {
		// TODO Auto-generated method stub
		return cnamDao.save(cnam);
	}

	@Override
	public void SupprimerCNAM(int id) {
		// TODO Auto-generated method stub
		cnamDao.deleteById(id);
	}

	@Override
	public CNAM ConsulterCNAM(int id) {
		// TODO Auto-generated method stub
		Optional<CNAM> cnam = cnamDao.findById(id);
		if(cnam.isPresent())
			return cnam.get();
		return null;
	}

	@Override
	public List<CNAM> VoirListeCNAM() {
		// TODO Auto-generated method stub
		List<CNAM> listCNAM = new ArrayList<CNAM>();
		cnamDao.findAll().forEach(listCNAM::add);
		if(listCNAM != null)
			return listCNAM;
		return null;
	}

	@SuppressWarnings("deprecation")
	@Override
	public Page<CNAM> findAllById(int pageNumber, int pageSize) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber - 1, pageSize);
		return this.cnamDao.findAll(pageable);
	}
}
