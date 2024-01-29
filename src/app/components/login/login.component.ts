import { Component, OnInit } from '@angular/core';

//forms validations
import { FormGroup, FormBuilder,  FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//importing user service
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  //declaring two variables
 status!:boolean;

  constructor(private formBuilder: FormBuilder,private _userService:UserService,private router:Router) {

   }

  ngOnInit(): void {
    

   this.loginForm = this.formBuilder.group({
   emailId:['',[Validators.required,Validators.email]],
   password:['',[Validators.required,Validators.minLength(3)]]
   });
   
  }
  
  SubmitForm(form: FormGroup) {
    var email = form.value.emailId;
    var pwd = form.value.password;
    //console.log(form.value.emailId);
    //console.log(form.value.password);
    this._userService.validateCredentials(email,pwd).subscribe({
     next:(response) =>{
      console.log(response);
      this.status = response.success;
      if(this.status){
        localStorage.setItem('token',response.data);
        // localStorage.setItem('email',email);
        this.router.navigate(['/dashboard']);

      }
     },
     error: (error) => {
      // Handle errors
      console.log(error);
      this.router.navigate(['/error']);
    },
    complete: () => {
      console.log("complete");
      // Handle completion if needed
    }

    });

  
     
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }
  }


