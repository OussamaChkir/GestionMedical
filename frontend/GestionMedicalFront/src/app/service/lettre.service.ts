import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Lettre{
  constructor(
    public numeroLettre:number,
    public dateLettre? :Date,
    public descriptionLettre? :string,
    public etatLettre? :boolean,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class LettreService {

  constructor(private http: HttpClient) { }
  getById(id:number){
    return this.http.get<any>("http://localhost:8080/lettre/"+id);
  }

  getAllLettre(){
    return this.http.get<any>("http://localhost:8080/lettres");
  }

  deleteLettre(id:number){
    return this.http.delete("http://localhost:8080/annulerlettre/"+id);
  }

  addLettre(lettre:Lettre){
    return this.http.post("http://localhost:8080/ajoutlettre",lettre);
  }
}
