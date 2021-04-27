import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cnam, CnamServiceService } from 'src/app/service/cnam-service.service';

@Component({
  selector: 'app-cnam-modifier',
  templateUrl: './cnam-modifier.component.html',
  styleUrls: ['./cnam-modifier.component.css']
})
export class CnamModifierComponent implements OnInit {
  typecnam =['assurance_maladie',"assurance_sociales","accidents_de_travail_et_maladies_pro","tunisiens_a_entranger"]
  public updateCnamForm : FormGroup
  constructor(fb:FormBuilder,
              private cs : CnamServiceService,
              private router: Router,
              private route : ActivatedRoute) { 
                let cnamFormControl={
                  etatcnam: new FormControl(''),
                  datavalidatecnam: new FormControl(''),
                  typecnam : new FormControl('')
                }
                this.updateCnamForm=fb.group(cnamFormControl)
              }


              ngOnInit() : void {
                let idCnam = this.route.snapshot.params.id;
                console.log(idCnam)
                this.cs.getCnamById(idCnam).subscribe(
                  (result) => {
                    let cnam = result;
                    console.log(result);
                    this.updateCnamForm.patchValue({
                      etatcnam : cnam.etatcnam,
                      datevaliditecnam : cnam.datevaliditecnam,
                      typecnam : cnam.typecnam
                    })
                  },
                  (error) =>{
                    console.log(error);
                  }
                )
              }
            
              get myetatcnam() {return this.updateCnamForm.get("etatcnam")}
              get mydatevalidatecnam(){return this.updateCnamForm.get("datevalidatecnam")}
              get mytypecnam(){return this.updateCnamForm.get("typecnam")}
            
              updateCnam(){
                let data = this.updateCnamForm.value
                let idCnam = this.route.snapshot.params.id;
                let cnam = new Cnam(idCnam, data.etatcnam, data.datevaliditecnam, data.typecnam)
            
                console.log(cnam);
                this.cs.updateCnam(cnam).subscribe(
                  res => {
                    console.log(res);
                    this.router.navigate(['/cnamlist'])
                  },
                  err =>{
                    console.log(err);
                  }
                )
            
              }
            

}
