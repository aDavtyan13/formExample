
import { Component, OnInit, Input } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  myform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor() { }


    onSubmit() {
      if (this.myform.valid) {
        console.log("Form Submitted!");
        this.myform.reset();
      }
      if (this.myform.invalid) {
        
      }
    }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl(null, Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }
  
}





