import { Component, OnInit } from '@angular/core';
import { Patient, PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientsList=[];
  constructor(private ps: PatientServiceService) { }

  ngOnInit() : void{
    this.getPatients();
   }
   getPatients(): void {
     this.ps.getAllPatients().subscribe(patientsList => this.patientsList=patientsList)
   }
   delete(patient : Patient): void {
     let x = confirm("Are you sure you want to delete"+" "+ patient.prenomPatient+" "+ patient.nomPatient);
     if (x){
     this.patientsList = this.patientsList.filter(h => h !== patient);
     this.ps.deletePatient(patient.numeroPatient).subscribe(
       res=>{console.log(res);
         alert(`Patient supprimer`);
         this.ngOnInit();
         
         
       },
       err=>{console.log(err)}
       
       )} 
     
   
   }
 
}
