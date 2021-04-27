import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-caisse-modifier',
  templateUrl: './caisse-modifier.component.html',
  styleUrls: ['./caisse-modifier.component.css']
})
export class CaisseModifierComponent implements OnInit {

  public caisseForm:FormGroup;

  constructor(private caisseServive:CaisseService,fb:FormBuilder,private route:ActivatedRoute) { 
    let caisseFormController1={
      typeReglement:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z0-9]+")]),
      montantReglement:new FormControl('',[Validators.required,Validators.pattern("[0-9 .]+")]),
      etat:new FormControl(false,[]),
      dateReglement:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController1)
    
  }

  ngOnInit() {
    let idPcaisse=this.route.snapshot.params.numeroReglement;
    this.caisseServive.getById(idPcaisse).subscribe(
      (result) => {
        let caisse=result;
        this.caisseForm.patchValue({
          typeReglement:caisse.typeReglemnt,
          montantReglement:caisse.montantReglement,
          etat:caisse.etat,
          dateReglement:caisse.dateReglement
        })
      }
    )
  }

  get getTypeReg(){return this.caisseForm.get("typeReglement")}
  get getMontantReg(){return this.caisseForm.get("montantReglement")}
  get getEtatReg(){return this.caisseForm.get("etat")}

  updateReglement(){
  
  }
}

