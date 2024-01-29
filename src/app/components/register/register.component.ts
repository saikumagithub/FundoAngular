import { Component, OnInit } from '@angular/core';
//forms validations
import { FormGroup, FormBuilder,  FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
//importing user service


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private _userService:UserService,private router:Router) { }


  ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    emailId:[''],
    password:['']

    
  });

  }

  SubmitRegisterForm(form:FormGroup){
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    console.log(form.value.emailId);
    console.log(form.value.password);
    this._userService.newUserRegister(form.value.firstName,form.value.lastName,form.value.emailId,form.value.password).subscribe({
      next:(response) =>{
        console.log(response);
       },
       error: (error) => {
        // Handle errors
        console.log(error);
      },
      complete: () => {
        console.log("complete");
        // Handle completion if needed
      }

    });
      
 
  }

  navigateToLogin(){
     this.router.navigate(['/login'])
  }

}
