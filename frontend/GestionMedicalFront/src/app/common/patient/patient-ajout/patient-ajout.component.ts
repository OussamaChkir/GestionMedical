import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient, PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-ajout',
  templateUrl: './patient-ajout.component.html',
  styleUrls: ['./patient-ajout.component.css']
})
export class PatientAjoutComponent implements OnInit {
  public patientForm:FormGroup
  sex = ['Male','Female'];
  constructor(private ps : PatientServiceService,
    fb: FormBuilder,
    private router:Router,
    private location: Location) {    
      let patientFormControl={
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
            
            
          ]),
          prof : new FormControl('',[
            Validators.required,
            Validators.pattern("[A-Za-z .'-]+")
          ]),
         /* code_apci : new FormControl('',[
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


  ngOnInit() {
  }
  get mycin(){return this.patientForm.get("cin")}
  get myname(){return this.patientForm.get("nom")}
  get myprenom(){return this.patientForm.get("prenom")}
  get mydatenais(){return this.patientForm.get("datenais")}
  get myadresse(){return this.patientForm.get("adresse")}
  get mysexe(){return this.patientForm.get("sexe")}
  get myprof(){return this.patientForm.get("prof")}
  goBack(): void {
    
  }
  addPatient(){
    let data = this.patientForm.value
    let patient = new Patient(null, data.cin,data.nom,data.prenom,data.datenais,data.adresse,data.sexe,data.prof)
    console.log(data);
    this.ps.addPatient(patient).subscribe(
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
