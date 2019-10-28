
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

  karmir(){
    
    }
  

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);
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

// @Component({
//   selector: 'form-example',
//   templateUrl: './form-example.component.html',
//   styleUrls: ['./form-example.component.css']
// })
// export class FormExampleComponent implements OnInit {
//   langs: string[] = [
//     'English',
//     'French',
//     'German',
//   ];
//   myform: FormGroup;
//   firstName: FormControl;
//   lastName: FormControl;
//   email: FormControl;
//   password: FormControl;
//   language: FormControl;


//   ngOnInit() {
//     this.createFormControls();
//     this.createForm();
//   }

//   createFormControls() {
//     this.firstName = new FormControl('', Validators.required);
//     this.lastName = new FormControl('', Validators.required);
//     this.email = new FormControl('', [
//       Validators.required,
//       Validators.pattern("[^ @]*@[^ @]*")
//     ]);
//     this.password = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8)
//     ]);
//     this.language = new FormControl('');
//   }

//   createForm() {
//     this.myform = new FormGroup({
//       name: new FormGroup({
//         firstName: this.firstName,
//         lastName: this.lastName,
//       }),
//       email: this.email,
//       password: this.password,
//       language: this.language
//     });
//   }
// }
