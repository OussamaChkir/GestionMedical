import { Component, OnInit } from '@angular/core';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';

@Component({
  selector: 'app-ordonnance-list',
  templateUrl: './ordonnance-list.component.html',
  styleUrls: ['./ordonnance-list.component.css']
})
export class OrdonnanceListComponent implements OnInit {
ListOrdonnance=[];
  constructor(private ordonnanceService:OrdonnanceService) { }

  ngOnInit() {
    this.ordonnanceService.getAllOrdonnance().subscribe(data => this.ListOrdonnance = data);
  }
  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this ordonnance");
    if (x) {
      this.ordonnanceService.deleteOrdonnance(id).subscribe(
        res => {
          console.log(res);
          alert(`ordonnance supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }
}
