import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class APCI{
  constructor(
    public numeroAPCI:number,
    public nomAPCI? :string,
    public dateAPCI? :Date,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class ApciService {

  constructor(private http: HttpClient) { }
  getById(id:number){
    return this.http.get<any>("http://localhost:8080/apci/"+id);
  }

  getAllApci(){
    return this.http.get<any>("http://localhost:8080/apcis");
  }

  deleteApci(id:number){
    return this.http.delete("http://localhost:8080/annulerapci/"+id);
  }

  addApci(apci:APCI){
    return this.http.post("http://localhost:8080/ajoutapci",apci);
  }
}
