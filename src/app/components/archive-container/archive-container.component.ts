import { Component, OnInit } from '@angular/core';
import { NotesService,INote } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.css']
})
export class ArchiveContainerComponent implements OnInit {


  archiveList:INote[] =[];
  notesArchiveTrashList:INote[]=[];

  constructor(private _noteService:NotesService) { }

  ngOnInit(): void {
    this.getNotes();
  }
  //get all notes method
  getNotes(){
    this._noteService.fetchAllNotes().subscribe(
      responseNotesData =>{
        this.notesArchiveTrashList = responseNotesData.data;
        console.log(this.notesArchiveTrashList);
        this.archiveList = this.notesArchiveTrashList.filter(noteObject => noteObject.isArchive === true);
        console.log(this.archiveList);
      }
    );
  }
  handleArchiveNoteId(noteid:number){
    this.archiveList = this.archiveList.filter(note => note.noteId != noteid);
    
  }

}
