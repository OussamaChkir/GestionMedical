import { Component, OnInit } from '@angular/core';
import { Cnam, CnamServiceService } from 'src/app/service/cnam-service.service';

@Component({
  selector: 'app-cnam-list',
  templateUrl: './cnam-list.component.html',
  styleUrls: ['./cnam-list.component.css']
})
export class CnamListComponent implements OnInit {
  cnamList=[];
  constructor(private cs:CnamServiceService) { }

  
  ngOnInit() : void {
    /* this.cs.getAllCnam().subscribe(
       result =>{
         this.cnamList = result;
         
       },
       error =>{
         console.log(error);
       }
     )*/
    this.getCnams();
   }
    getCnams() : void {
      this.cs.getAllCnam().subscribe(cnamList => this.cnamList=cnamList)
    }
   /*filtre(value){
     this.cnamList=this.allCnamList.filter(c=>{
       return c.typecnam.includes(value)||c.idcnam==value
     })
   }*/
 
   
   delete(cnam : Cnam){
     let x = confirm("Are you sure you want to delete"+cnam.idcnam);
     console.log(cnam.idcnam)
     if(x){
       this.cs.deleteCnam(cnam.idcnam).subscribe(
         res => {console.log(res);
           alert("Cnam Suprimer");
           this.ngOnInit();
         },
         err=>{console.log(err)}
       )
     }
     else return false;
   }
   clickMethod(typecnam:string){
     let x = confirm("Are you sure you want to delete"+typecnam)
     if(x)
       return true;
     else
       return false;
   }
 

}
