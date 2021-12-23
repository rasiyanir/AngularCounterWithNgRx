import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  postForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ])
    });
  }

  get title(){
    return this.postForm.controls['title'];
  }

  get descriptionForm(){
    return this.postForm.controls['description'];
  }

  onAddPost(){
    if(this.postForm.invalid){
      return;
    }
    console.log(this.postForm.value);
  }

  showDescriptionErrors(){
    // const descriptionForm = this.postForm.get('description');
    if(this.descriptionForm?.touched && this.descriptionForm?.invalid){
      if(this.descriptionForm.errors?.required){
        return 'Description is required';
      }
      if(this.descriptionForm.errors?.minlength){
        return 'Description should be of minimum 10 characters length';
      }
    }
    return '';
  }
}
