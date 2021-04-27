import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ordonnance, OrdonnanceService } from 'src/app/service/ordonnance.service';

@Component({
  selector: 'app-ordonnance-ajout',
  templateUrl: './ordonnance-ajout.component.html',
  styleUrls: ['./ordonnance-ajout.component.css']
})
export class OrdonnanceAjoutComponent implements OnInit {
  public caisseForm:FormGroup;
  constructor(private ordonnanceService:OrdonnanceService,fb:FormBuilder) {
    let caisseFormController={
      numeroOrdonnance:new FormControl('',[]),
      dateOrdonnance:new FormControl('',[]),
      typeOrdonnance:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController)
   }

  ngOnInit() {
  }
  addOrdonnance(){
    let data =this.caisseForm.value;
    console.log(data);
    let ordonnance =new Ordonnance(data.numeroAPCI,data.nomAPCI,data.dateAPCI);
    this.ordonnanceService.addOrdonnance(ordonnance).subscribe();
  }
}
