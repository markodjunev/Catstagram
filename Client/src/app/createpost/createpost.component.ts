import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
  catForm: FormGroup;
  constructor(private fb: FormBuilder, private catsService: CatsService) { 
    this.catForm = this.fb.group({
      'ImageUrl': ['', Validators.required],
      'Description': ['']
    })
  }

  get imageUrl() {
    return this.catForm.get('ImageUrl');
  }

  create() {
    this.catsService.create(this.catForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
