import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../models/Cat';
import { CatsService } from '../services/cats.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-cat',
  templateUrl: './details-cat.component.html',
  styleUrls: ['./details-cat.component.css']
})
export class DetailsCatComponent implements OnInit {
  id: string;
  cat: Cat;
  constructor(private route: ActivatedRoute, private catsService: CatsService) { 
    this.fetchData()
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id
    }), mergeMap(id => this.catsService.getCat(id))).subscribe(res => {
      this.cat = res;
    })
  }

  ngOnInit(): void {
  }

}
