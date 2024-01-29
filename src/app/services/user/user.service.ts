import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

//login interface
interface IUser{
  email:string,
  password:string,
}


//register interfece
interface IRegister{
  firstName:string;
  lastName:string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

  
   //Login method service
   validateCredentials(email:string,password:string):Observable<any>{
    var userObj:IUser;
    userObj = {email:email,password:password};
    return this.http.post<any>('https://localhost:44321/api/Users/Login', userObj).pipe(catchError(this.errorHandler));
    
   }

   errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

  //register method service
  newUserRegister(fname:string,lname:string,email:string,pwd:string):Observable<any>
  {
   var newuser:IRegister;
   newuser = {firstName:fname,lastName:lname,email:email,password:pwd}
   return this.http.post<any>('https://localhost:44321/api/Users/Register',newuser,).pipe(catchError(this.errorHandler));
  }

}
