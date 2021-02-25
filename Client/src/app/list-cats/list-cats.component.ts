import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../models/Cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent implements OnInit {
  cats: Array<Cat>;
  constructor(private catsService: CatsService, private router: Router) { }

  ngOnInit() {
    this.fetchCats()
  }

  fetchCats() {
    this.catsService.getCats().subscribe(cats => {
      this.cats = cats;
      console.log(this.cats)
    })
  }

  editCat(id) {
    this.router.navigate(["cats", id, "edit"])
  }
  
  deleteCat(id) {
    console.log("Hello")
    this.catsService.deleteCat(id).subscribe(res => {
      this.fetchCats()
    })
  }
}
