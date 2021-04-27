import { Component, OnInit } from '@angular/core';
import { LettreService } from 'src/app/service/lettre.service';

@Component({
  selector: 'app-lettre-list',
  templateUrl: './lettre-list.component.html',
  styleUrls: ['./lettre-list.component.css']
})
export class LettreListComponent implements OnInit {
  ListLettre=[];
  constructor(private lettreService:LettreService) { }

  ngOnInit() {
    this.lettreService.getAllLettre().subscribe(data => this.ListLettre = data);
  }
  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this lettre");
    if (x) {
      this.lettreService.deleteLettre(id).subscribe(
        res => {
          console.log(res);
          alert(`lettre supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }

}
