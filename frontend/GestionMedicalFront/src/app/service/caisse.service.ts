import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Caisse{
  constructor(
    public numeroReglemnt:number,
    public typeReglemnt? :string,
    public montantReglemnt? :number,
    public dateReglemnt? :Date,
    public etatReglemnt? :boolean,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  constructor(private http: HttpClient) { }
  getById(id:number){
    return this.http.get<any>("http://localhost:8080/reglement/"+id);
  }

  getAllReglement(){
    return this.http.get<any>("http://localhost:8080/reglements");
  }

  deleteReglement(id:number){
    return this.http.delete("http://localhost:8080/annulerReglement/"+id);
  }

  updateReglement(caisse: Caisse){
    return this.http.put("http://localhost:8080/modifierReglement/"+caisse.numeroReglemnt,caisse);
  }

  addReglement(caisse:Caisse){
    return this.http.post("http://localhost:8080/ajoutReglement",caisse);
  }

  getRapportJour(dateJour:Date){
    return this.http.get("http://localhost:8080/rapportParJour/"+dateJour);
  }
}
