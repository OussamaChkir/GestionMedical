import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-modifier',
  templateUrl: './patient-modifier.component.html',
  styleUrls: ['./patient-modifier.component.css']
})
export class PatientModifierComponent implements OnInit {

  public patientForm:FormGroup;
  sex = ['Male','Female'];
  constructor(private ps : PatientServiceService,
    fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute) {    
      let patientFormControl={
        numeroPatient : new FormControl('',[
        ]),
        cin : new FormControl('',[
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
            Validators.pattern("^[+ 0-9]{8}$")
          ]),
          nom : new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[A-Za-z .'-]+")
          ]),
          prenom : new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[A-Za-z .'-]+")
          ]),
          datenais : new FormControl('',[
            Validators.required,
        
          ]),
          adresse : new FormControl('',[
            Validators.required,
            Validators.minLength(5),
            Validators.pattern("[A-Za-z .'-]+")
          ]),
          sexe : new FormControl('',[
            Validators.required,
          ]),
          prof : new FormControl('',[
            Validators.required,
            Validators.pattern("[A-Za-z .'-]+")
          ]),
          /*code_apci : new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("^[+ 0-9]$")
          ]),
          cnam : new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("^[+ 0-9]$")
          ]),*/
        }
        this.patientForm=fb.group(patientFormControl)
    }

  ngOnInit() : void { 
   let idPatient= this.route.snapshot.params.numeroPatient;
    this.ps.getPatientById(idPatient).subscribe(
      (result) => {
        let patient=result;
        this.patientForm.patchValue({
          numeroPatient:patient.numeroPatient,
          cin:patient.cinPatient,
          nom:patient.nomPatient,
          prenom:patient.prenomPatient,
          datenais:patient.dateNaissancePatient,
          adresse:patient.adressePatient,
          sexe:patient.sexePatient,
          prof:patient.professionPatient
         })
      },
      error =>{
        console.log(error);
      }
    )
    
    }
  get mynumeroPatient(){return this.patientForm.get("numeroPatient")}
  get mycin(){return this.patientForm.get("cin")}
  get myname(){return this.patientForm.get("nom")}
  get myprenom(){return this.patientForm.get("prenom")}
  get mydatenais(){return this.patientForm.get("datenais")}
  get myadresse(){return this.patientForm.get("adresse")}
  get mysexe(){return this.patientForm.get("sexe")}
  get myprof(){return this.patientForm.get("prof")}
  
//  get mycodeapci(){return this.patientForm.get("code_apci")}
  //get mycnam(){return this.patientForm.get("cnam")}
  
  updatePatient(){
    let data = this.patientForm.value
    let idPatient = this.route.snapshot.params.numeroPatient;
    let patient = new Patient(idPatient, data.cin,data.nom,data.prenom,data.datenais,data.adresse,data.sexe, data.prof)
      
    console.log(data);
    this.ps.updatePatient(patient).subscribe(
      (result) => {
        console.log(result);
        //this.router.navigateByUrl('/patient-list')
        this.router.navigateByUrl('')
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
