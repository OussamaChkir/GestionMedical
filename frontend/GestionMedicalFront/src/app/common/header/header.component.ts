import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username =sessionStorage.getItem("username");
  constructor(private authentocationService: AuthentificationService,private router: Router) { }

  ngOnInit() {
  }
  doLogout(){
    this.authentocationService.logOut()
  }
}
