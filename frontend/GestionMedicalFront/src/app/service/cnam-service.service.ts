import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Cnam {

  constructor(
      public idcnam? : Number,
      public etatcnam? : Number,
      public datevaliditecnam? : Date,
      public typecnam? : string
      //public listpatientcnam? : string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class CnamServiceService {
  private getAllCnamURL = "http://localhost:8080/api/cnams/"
  private deleteCnamURL = "http://localhost:8080/api/cnam/"
  private addCnamURL = "http://localhost:8080/api/cnam/add/"
  private getCnamByIdURL = "http://localhost:8080/api/cnam/"
  private updateCnamURL = "http://localhost:8080/api/cnam/"
  private findByPageURL = "http://localhost:8080/api/cnam/page/"

  constructor(private http:HttpClient) { }

  getAllCnam(){
    
    return this.http.get<any>(this.getAllCnamURL)
  }

  addCnam(cnam :Cnam){
   
    return this.http.post<any>(this.addCnamURL,cnam)
  }

  getCnamById(id : string){
    
    return this.http.get<any>(this.getCnamByIdURL+id)
  }

  updateCnam(cnam : Cnam){
    let token = localStorage.getItem("mytoken")
   
    return this.http.put<any>(this.updateCnamURL+cnam.idcnam, cnam)
  }

  deleteCnam(id: Number){
    let token = localStorage.getItem("mytoken")
   
    return this.http.delete<any>(this.deleteCnamURL+id)
  }

  findByPage(page:Number, size:Number){
    let token = localStorage.getItem("mytoken")
   
    return this.http.get<any>(this.findByPageURL+page+""+size)
  }

}
