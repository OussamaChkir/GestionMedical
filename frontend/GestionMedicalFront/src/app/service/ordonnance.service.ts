import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Ordonnance{
  constructor(
public numeroOrdonnance:number,
public dateOrdonnance:Date,
public typeOrdonnance:String
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {

  constructor(private http: HttpClient) { }
  getById(id:number){
    return this.http.get<any>("http://localhost:8080/ordonnance/"+id);
  }

  getAllOrdonnance(){
    return this.http.get<any>("http://localhost:8080/ordonnances");
  }

  deleteOrdonnance(id:number){
    return this.http.delete("http://localhost:8080/annulerordonnance/"+id);
  }

  updateOrdonnance(ordonnance: Ordonnance){
    return this.http.put("http://localhost:8080/modifierordonnance/"+ordonnance.numeroOrdonnance,ordonnance);
  }

  addOrdonnance(ordonnance: Ordonnance){
    return this.http.post("http://localhost:8080/ajoutordonnance",ordonnance);
  }
}
