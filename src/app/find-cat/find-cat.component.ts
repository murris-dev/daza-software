import { Component, OnInit } from '@angular/core';
import { CatService } from "../cat.service";

@Component({
  selector: 'app-find-cat',
  templateUrl: './find-cat.component.html',
  styleUrls: ['./find-cat.component.scss']
})
export class FindCatComponent implements OnInit {
  show: boolean = false;
  cats = [ ];
  oCat: any;
  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.catService.getCat().subscribe((data: any) => {
      this.cats = data;
      this.show = true;
    });
  }

}
