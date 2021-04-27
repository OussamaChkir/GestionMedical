import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Examen, ExamenService } from 'src/app/service/examen.service';

@Component({
  selector: 'app-examen-ajout',
  templateUrl: './examen-ajout.component.html',
  styleUrls: ['./examen-ajout.component.css']
})
export class ExamenAjoutComponent implements OnInit {
  public caisseForm:FormGroup;
  constructor(private examenService:ExamenService,fb:FormBuilder) {
    let caisseFormController={
      numeroExamen:new FormControl('',[]),
      dateExamen:new FormControl('',[]),
      descriptionExamen:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController)
   }

  ngOnInit() {
  }
  addExamen(){
    let data =this.caisseForm.value;
    console.log(data);
    let exam =new Examen(data.numeroExamen,data.dateExamen,data.descriptionExamen);
    this.examenService.addExamen(exam).subscribe();
  }
}
