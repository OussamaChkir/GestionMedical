import { Component, OnInit } from '@angular/core';
import { AuthentificationService, User } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users:any;
  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
    
    console.log(sessionStorage.getItem("roles"));
  }

}
