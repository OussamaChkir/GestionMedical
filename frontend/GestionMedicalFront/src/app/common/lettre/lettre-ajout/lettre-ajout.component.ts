import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Lettre, LettreService } from 'src/app/service/lettre.service';

@Component({
  selector: 'app-lettre-ajout',
  templateUrl: './lettre-ajout.component.html',
  styleUrls: ['./lettre-ajout.component.css']
})
export class LettreAjoutComponent implements OnInit {
  public caisseForm:FormGroup;
  constructor(private lettreService:LettreService,fb:FormBuilder) {
    let caisseFormController={
      numeroLettre:new FormControl('',[]),
      dateLettre:new FormControl('',[]),
      descriptionLettre:new FormControl('',[]),
      etatLettre:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController)
  }

  ngOnInit() {
  }
  addLettre(){
    let data =this.caisseForm.value;
    console.log(data);
    let lettre =new Lettre(data.numeroLettre,data.dateLettre,data.descriptionLettre,data.etatLettre);
    this.lettreService.addLettre(lettre).subscribe();
  }
}
