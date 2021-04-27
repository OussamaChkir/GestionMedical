import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Examen{
  constructor(
    public numeroExamen:number,
    public dateExamen? :Date,
    public descriptionExamen? :string,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }
  getById(id:number){
    return this.http.get<any>("http://localhost:8080/examen/"+id);
  }

  getAllExamen(){
    return this.http.get<any>("http://localhost:8080/examens");
  }

  deleteExamen(id:number){
    return this.http.delete("http://localhost:8080/annulerexamen/"+id);
  }

  addExamen(examen:Examen){
    return this.http.post("http://localhost:8080/ajoutexamen",examen);
  }
}
