import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  addPostForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  addPost(){
    
  }
}
