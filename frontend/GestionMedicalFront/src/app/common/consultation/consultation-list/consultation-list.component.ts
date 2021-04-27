import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/service/consultation.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.css']
})
export class ConsultationListComponent implements OnInit {
  ListConsultation=[];
  constructor(private consultationService:ConsultationService) { 
  }

  ngOnInit() {
    this.consultationService.getAllConsultation().subscribe(data => this.ListConsultation = data);
  }

  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this consultation");
    if (x) {
      this.consultationService.deleteConsultation(id).subscribe(
        res => {
          console.log(res);
          alert(`consultation supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }
}
