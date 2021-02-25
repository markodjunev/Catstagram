import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/Cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  catForm: FormGroup;
  catId: string;
  cat: Cat;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private catsService: CatsService,
    private router: Router
   ) 
   { 
     this.catForm = this.fb.group({
      'id': [''],
      'description': [''],
     })
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catId = params['id'];
      this.catsService.getCat(this.catId).subscribe(res => {
        this.cat = res;
        this.catForm = this.fb.group({
          'id': [this.cat.id],
          'description': [this.cat.description],
        })
      })
    })
  }

  editCat() {
    this.catsService.editCat(this.catForm.value).subscribe(res => {
      this.router.navigate(["cats"])
    })
  }

}
