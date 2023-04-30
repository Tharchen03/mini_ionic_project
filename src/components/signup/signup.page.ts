import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form:FormGroup;

  constructor(private router:Router,) { }

  ngOnInit() {

  }
  joinus(){
    this.router.navigateByUrl('/login');
    
  }

}
