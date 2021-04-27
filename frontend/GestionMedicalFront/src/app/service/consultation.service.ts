import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Consultation{
  constructor(
    public numeroConsultation:number,
    public dateConsultation? :Date,
    public descriptionConsultation? :string,
    public etatConsultation? :boolean,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  getById(id:number){
    return this.http.get<any>("http://localhost:8080/consultation/"+id);
  }

  getAllConsultation(){
    return this.http.get<any>("http://localhost:8080/consultations");
  }

  deleteConsultation(id:number){
    return this.http.delete("http://localhost:8080/annulerconsultation/"+id);
  }

  addConsultation(cons:Consultation){
    return this.http.post("http://localhost:8080/ajoutconsultation",cons);
  }

  updateOrdonnance(cons:Consultation){
    return this.http.put("http://localhost:8080/modifierconsultation/"+cons.numeroConsultation,cons);
  }
  
  getnbrOrdonnance(){
    return this.http.get<any>("http://localhost:8080/nbrconsultation/");
  }


}
