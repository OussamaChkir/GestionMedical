import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Caisse, CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-caisse-ajout',
  templateUrl: './caisse-ajout.component.html',
  styleUrls: ['./caisse-ajout.component.css']
})
export class CaisseAjoutComponent implements OnInit {

public caisseForm:FormGroup

  constructor(private caisseServive:CaisseService,fb:FormBuilder) {
    let caisseFormController={
      typeReglement:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z0-9]+")]),
      montantReglement:new FormControl('',[Validators.required,Validators.pattern("[0-9 .]+")]),
      etat:new FormControl(false,[]),
    }
    this.caisseForm=fb.group(caisseFormController)
   }

  ngOnInit() {
  }

  get getTypeReg(){return this.caisseForm.get("typeReglement")}
  get getMontantReg(){return this.caisseForm.get("montantReglement")}
  get getEtatReg(){return this.caisseForm.get("etat")}

  addReglement(){
    let data =this.caisseForm.value;
    console.log(data);
    let caisse =new Caisse(null,data.typeReglement,data.montantReglement,null,data.etat);
    this.caisseServive.addReglement(caisse).subscribe();
  }
}
