import { Component, OnInit } from '@angular/core';
import { CaisseService } from 'src/app/service/caisse.service';

@Component({
  selector: 'app-caisse-list',
  templateUrl: './caisse-list.component.html',
  styleUrls: ['./caisse-list.component.css']
})
export class CaisseListComponent implements OnInit {
  listReglement = [];
  constructor(private caisseService: CaisseService) { }

  ngOnInit() {
    this.caisseService.getAllReglement().subscribe(data => this.listReglement = data);
  }

  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this Reglement");
    if (x) {
      this.caisseService.deleteReglement(id).subscribe(
        res => {
          console.log(res);
          alert(`Reglement supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }
}
