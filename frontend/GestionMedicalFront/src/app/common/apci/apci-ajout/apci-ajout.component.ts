import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { APCI, ApciService } from 'src/app/service/apci.service';

@Component({
  selector: 'app-apci-ajout',
  templateUrl: './apci-ajout.component.html',
  styleUrls: ['./apci-ajout.component.css']
})
export class ApciAjoutComponent implements OnInit {
  public caisseForm:FormGroup;
  constructor(private apciService:ApciService,fb:FormBuilder) { 
    let caisseFormController={
      numeroAPCI:new FormControl('',[]),
      nomAPCI:new FormControl('',[]),
      dateAPCI:new FormControl('',[]),
    }
    this.caisseForm=fb.group(caisseFormController)
  }

  ngOnInit() {
  }
  addApci(){
    let data =this.caisseForm.value;
    console.log(data);
    let apci =new APCI(data.numeroAPCI,data.nomAPCI,data.dateAPCI);
    this.apciService.addApci(apci).subscribe();
  }
}
