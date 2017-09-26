import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  userName:string = '';
  password:string = '';

 constructor() {}
  // constructor(private fb: FormBuilder) {
  //   this.rForm = fb.group({
  //     'userName' : [null, Validators.required],
  //     'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(25)])],
  //     'validate' : ''
  //   });
  //  }
   addPost(post) {
    this.userName = post.description;
    this.password = post.name;
  }

  ngOnInit() {
  }

}
