import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {
  ListExamen=[];
  constructor(private examenService:ExamenService) { }

  ngOnInit() {
    this.examenService.getAllExamen().subscribe(data => this.ListExamen = data);
  }
  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this examen");
    if (x) {
      this.examenService.deleteExamen(id).subscribe(
        res => {
          console.log(res);
          alert(`examen supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }
}
