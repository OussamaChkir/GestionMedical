package com.GestionMedical.GestionMedical.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.GestionMedical.GestionMedical.model.Utilisateur;
import com.GestionMedical.GestionMedical.model.UtilisateurDTO;
import com.GestionMedical.GestionMedical.repository.IUtilisateurDao;


@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private IUtilisateurDao UtilisateurDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Utilisateur user = UtilisateurDao.findByloginUtilisateur(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getTypeUtilisateur()));
		return new org.springframework.security.core.userdetails.User(user.getLoginUtilisateur(), user.getPwsUtilisateur(),
				authorities);
	}
	
	public Utilisateur save(UtilisateurDTO user) {
		Utilisateur newUser = new Utilisateur();
		newUser.setNomUtilisateur(user.getNomUtilisateur());
		newUser.setLoginUtilisateur(user.getLoginUtilisateur());
		newUser.setPwsUtilisateur(bcryptEncoder.encode(user.getPwsUtilisateur()));
		newUser.setTypeUtilisateur(user.getTypeUtilisateur());
		return UtilisateurDao.save(newUser);
	}
}
