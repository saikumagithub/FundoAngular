import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, catchError, observable, throwError } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';


export interface INote {
   noteId:number;
  title:string;
  description:string;
  remainder:Date;
  color:string;
  image:string;
  isArchive:boolean;
  isPin:boolean;
  isTrash:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { 

  }

  //fetching all the notes 
 fetchAllNotes():Observable<any>{

  const token = localStorage.getItem('token')
  const head = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let notesList = this.http.get<any>('https://localhost:44321/api/Notes/getallnotes',{headers:head});
  return notesList;
 }


 //adding the notes 
 addNote(noteTitle:string,noteDescription:string):Observable<any>{
  const token = localStorage.getItem('token')
  const head = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  
  const  noteobj = {
      
    title:noteTitle,
    description:noteDescription,
    remainder:new Date(),
    color:"",
    image:"",
    isArchive:false,
    isPin:false,
    isTrash:false,
   }
  return this.http.post<any>('https://localhost:44321/api/Notes/addnote',noteobj,{headers:head})
 }

//archive note
archiveNote(noteId:number):Observable<any>
{
  const token = localStorage.getItem('token')
  const head = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  const apiUrl = `https://localhost:44321/api/Notes/ArchiveStaus?noteId=${noteId}`;
  return this.http.put<any>(apiUrl,{},{headers:head})
}

trashNote(noteId:number):Observable<any>{
  const token = localStorage.getItem('token')
  const head = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  const apiUrl = `https://localhost:44321/api/Notes/trashStaus?noteId=${noteId}`;
  return this.http.put<any>(apiUrl,{},{headers:head})
}
updateBackgroundcolor(noteId:number,bgColor:string):Observable<any>{
  const token = localStorage.getItem('token')
  const head = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  const apiUrl = `https://localhost:44321/api/Notes/addupdatecolor?noteId=${noteId}&backgroundColor=${bgColor}`;
  return this.http.put<any>(apiUrl,{},{headers:head})
}


}
