import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  constructor() { }

  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
          username: new FormControl('', Validators.required),
          password: new FormControl('', [
            Validators.minLength(6),
            Validators.maxLength(8),
            Validators.required
          ]),
      
    });
  }
}