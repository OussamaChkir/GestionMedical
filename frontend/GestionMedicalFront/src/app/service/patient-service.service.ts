import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export enum SexePatient{
  Male , 
  Female
}

export class Patient {

  constructor(
      public numeroPatient? : number,
      public cinPatient? : number,
      public nomPatient? : string,
      public prenomPatient? : string,
      public dateNaissancePatient? : Date,
      public adressePatient? : string,
      public sexePatient? : string,
      public professionPatient? : string,
    
      /*public code_APCI? : number,
      public consultationPatient? : ConsultationPatient[],
      public listRDVPatient? : ListRDVPatient[],
      public cnampatient? : CNAMPatient,
      public listRegelemntPatient? : ListRegelemntPatient[]*/
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private getAllPatientsURL = "http://localhost:8080/api"
  private deletePatientURL = "http://localhost:8080/api/"
  private addPatientURL = "http://localhost:8080/api/patient/add"
  private getPatientByIdURL = "http://localhost:8080/api/patient/"
  private updatePatientURL = "http://localhost:8080/api/patient/" 
  private getPatientByCINURL = "http://localhost:8080/api/patients/"

  constructor(private http: HttpClient) { }
  
  getAllPatients(){

    return this.http.get<any>(this.getAllPatientsURL);
  }

  updatePatient(patient: Patient){
    
    return this.http.put<any>(this.updatePatientURL+patient.numeroPatient, patient) 
  }

  deletePatient(id:number){
    
    return this.http.delete<any>(this.deletePatientURL+id);
  }

  addPatient(patient: Patient){
    
    return this.http.post<any>(this.addPatientURL, patient)
  }

  getPatientById(id : number){
   
    return this.http.get<any>(this.getPatientByIdURL+id)
  }

  getPatientByCIN(cin:number){

    return this.http.get<any>(this.getPatientByCINURL+cin)
  }

}
