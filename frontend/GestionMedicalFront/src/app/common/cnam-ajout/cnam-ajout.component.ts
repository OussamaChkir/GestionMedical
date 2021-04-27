import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cnam, CnamServiceService } from 'src/app/service/cnam-service.service';

@Component({
  selector: 'app-cnam-ajout',
  templateUrl: './cnam-ajout.component.html',
  styleUrls: ['./cnam-ajout.component.css']
})
export class CnamAjoutComponent implements OnInit {
  public cnamForm : FormGroup
  typecnam =['assurance_maladie',"assurance_sociales","accidents_de_travail_et_maladies_pro","tunisiens_a_entranger"]
  constructor(fb : FormBuilder,
    private cs : CnamServiceService,
    private route : Router) {
      let cnamFormControl = {
        etatcnam: new FormControl(''),
        datevaliditecnam : new FormControl(''),
        typecnam : new FormControl('')
      }
      this.cnamForm=fb.group(cnamFormControl)
    }
    get myetatcnam(){return this.cnamForm.get('etatcnam')}
    get mydatevalidatecnam(){return this.cnamForm.get('datevaliditecnam')}
    get mytypecnam(){return this.cnamForm.get("typecnam")}
  

  ngOnInit() {
  }
  addCnam(){
    let data = this.cnamForm.value
    let cnam = new Cnam(null, data.etatcnam, data.datevaliditecnam, data.typecnam)

    console.log(data);

    this.cs.addCnam(cnam).subscribe(
      (result) => {
        console.log(result);
        this.route.navigateByUrl('')
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
