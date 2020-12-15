import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  hide = true;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }
  profileForm = this.fb.group({
 
    userName: [''],
   
 
  });
  onSubmit(form: NgForm){}
}
