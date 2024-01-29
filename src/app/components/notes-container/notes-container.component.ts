import { Component, OnInit } from '@angular/core';
import {BRUSH_ICON,IMG_ICON,TICK_ICON,PIN_ICON,REMINDER_ICON
  ,COLLABRATOR_ICON,COLOR_PALATTE_ICON,ARCHIVE_ICON,UNDO_ICON,REDO_ICON} from './../../../assets/icons/svg-icons';
  import { MatIconRegistry } from '@angular/material/icon';
  import { DomSanitizer } from '@angular/platform-browser';

  import { NotesService,INote } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  showTakeNote:boolean = true;
  notesList:INote[] =[];
  notesArchiveTrashList:INote[]=[];
  //this variable holding a new note from response and used for adding in list
  newNote!:INote;

  //for adding notes variables
  noteTitle:string = '';
  noteDescription:string = '';

  constructor(private iconRegistry:MatIconRegistry, private sanitizer:DomSanitizer,private _noteService:NotesService) {
  iconRegistry.addSvgIconLiteral("brush-icon",sanitizer.bypassSecurityTrustHtml(BRUSH_ICON))
  iconRegistry.addSvgIconLiteral("img-icon",sanitizer.bypassSecurityTrustHtml(IMG_ICON))
  iconRegistry.addSvgIconLiteral("tick-icon",sanitizer.bypassSecurityTrustHtml(TICK_ICON))
  iconRegistry.addSvgIconLiteral("pin-icon",sanitizer.bypassSecurityTrustHtml(PIN_ICON))  
  iconRegistry.addSvgIconLiteral("reminder-icon",sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))   
  iconRegistry.addSvgIconLiteral("collabrator-icon",sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))  
  iconRegistry.addSvgIconLiteral("color-palatte-icon",sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))  
  iconRegistry.addSvgIconLiteral("archive-icon",sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)) 
  iconRegistry.addSvgIconLiteral("undo-icon",sanitizer.bypassSecurityTrustHtml(UNDO_ICON))  
  iconRegistry.addSvgIconLiteral("redo-icon",sanitizer.bypassSecurityTrustHtml(REDO_ICON))   

}

  ngOnInit(): void {
    this.getNotes();
  }



 //get all notes method
  getNotes(){
    this._noteService.fetchAllNotes().subscribe(
      responseNotesData =>{
        this.notesArchiveTrashList = responseNotesData.data;
        console.log(this.notesArchiveTrashList);
        this.notesList = this.notesArchiveTrashList.filter(noteObject => noteObject.isArchive === false && noteObject.isTrash === false);
        console.log(this.notesList);
      }
    );
  }

  //hide and show for take note
  handleTakeNote(){
    this.showTakeNote = false;
  }
    //hide and show for take note
  handleSaveNote(){
    // this below variable is for closing taking note view
    this.showTakeNote = true; 
   console.log(this.noteTitle);
   console.log(this.noteDescription)
   this._noteService.addNote(this.noteTitle,this.noteDescription).subscribe(
       responseAddNotesData =>{
        //assigning a returned note value to variable
        this.newNote = responseAddNotesData.data;
        //adding a new note to the list at index zero
        this.notesList.unshift(this.newNote);
        console.log(responseAddNotesData.data);
        console.log(responseAddNotesData.success);
       }
   )

  }

  handleArchiveNoteId(noteid:number){
    this.notesList = this.notesList.filter(note => note.noteId != noteid);
    
  }
  handleBgColor(received:any){
    console.log("i am color");
    console.log(received);

  }








}