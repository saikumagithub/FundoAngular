import { Component, OnInit } from '@angular/core';
import { NotesService,INote } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.css']
})
export class TrashContainerComponent implements OnInit {

  trashList:INote[] =[];
  notesArchiveTrashList:INote[]=[];

  constructor(private _noteService:NotesService) {

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
        this.trashList = this.notesArchiveTrashList.filter(noteObject => noteObject.isTrash === true);
        console.log(this.trashList);
      }
    );
  }

  handleTrashNoteId(noteId:number){
    this.trashList = this.trashList.filter(note => note.noteId != noteId);
  }
}
