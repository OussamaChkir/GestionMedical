import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Consultation, ConsultationService } from 'src/app/service/consultation.service';

@Component({
  selector: 'app-consultation-ajout',
  templateUrl: './consultation-ajout.component.html',
  styleUrls: ['./consultation-ajout.component.css']
})
export class ConsultationAjoutComponent implements OnInit {
  public caisseForm:FormGroup;
  constructor(private consultationService:ConsultationService,fb:FormBuilder) { 
    let caisseFormController={
      numeroConsultation:new FormControl('',[]),
      dateConsultation:new FormControl('',[]),
      descriptionConsultation:new FormControl('',[]),
      etatConsultation:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController)
  }

  ngOnInit() {
  }
  addConsultation(){
    let data =this.caisseForm.value;
    console.log(data);
    let cons =new Consultation(data.numeroConsultation,data.dateConsultation,data.descriptionConsultation,data.etatConsultation);
    this.consultationService.addConsultation(cons).subscribe();
  }
}
