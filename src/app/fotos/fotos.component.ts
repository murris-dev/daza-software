import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CatService } from "../cat.service";
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  cats = [];
  image: any;
  indice = 0;
  enableFirst: boolean = false;
  enableBack: boolean = false;
  enableLast: boolean = true;
  enableNext: boolean = true;
  show:boolean = false;
  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.changeImages();
  }

  changeImages() {
    this.show = false
    this.catService.getRandomImages().subscribe((data: any) => {
      this.cats = data;
      this.indice = 0;
      this.image = this.cats[this.indice].url
      this.enableFirst = false;
      this.enableBack = false;
      this.enableNext = true;
      this.enableLast = true;
      this.show = true;
    });
  }

  first(){
    this.indice = 0;
    this.image = this.cats[this.indice].url
    this.enableFirst = false;
    this.enableBack = false
    this.enableNext = true;
    this.enableLast = true;
  }

  back(){
    if(this.indice == 1) {
      this.first();
    } else {
      this.indice--;
      this.image = this.cats[this.indice].url
      this.enableNext = true;
      this.enableLast = true;
    }
  }

  next() {
    if(this.indice == 16) {
      this.last();
    } else {
      this.indice++;
      this.image = this.cats[this.indice].url;
      this.enableBack = true;
      this.enableFirst = true;  
    }
  }

  last() {
    this.indice = 17;
    this.image = this.cats[this.indice].url;
    this.enableFirst = true;
    this.enableBack = true;
    this.enableLast = false;
    this.enableNext = false;
  }

}
