import { Component, OnInit } from '@angular/core';
import { ApciService } from 'src/app/service/apci.service';

@Component({
  selector: 'app-apci-list',
  templateUrl: './apci-list.component.html',
  styleUrls: ['./apci-list.component.css']
})
export class ApciListComponent implements OnInit {
  ListApci=[];
  constructor(private apciSevice:ApciService) { }

  ngOnInit() {
    this.apciSevice.getAllApci().subscribe(data => this.ListApci = data);
  }
  delete(id: number): void {
    let x = confirm("Are you sure you want to delete this apci");
    if (x) {
      this.apciSevice.deleteApci(id).subscribe(
        res => {
          console.log(res);
          alert(`apci supprimer`);
          this.ngOnInit();

        },
        err => { console.log(err) }

      )
    }
  }
}
