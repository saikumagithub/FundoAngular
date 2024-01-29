import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {BRUSH_ICON,IMG_ICON,TICK_ICON,PIN_ICON,REMINDER_ICON
,COLLABRATOR_ICON,COLOR_PALATTE_ICON,ARCHIVE_ICON,UNDO_ICON,REDO_ICON,MORE_ICON,UNARCHIVE_ICON,RESTORE_ICON,DELETE_FOREVER_ICON} from './../../../assets/icons/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { INote ,NotesService} from 'src/app/services/notes/notes.service';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

 @Input() noteobj!:INote;
 @Output() archiveNoteIdNoteContainer = new EventEmitter<number>();
 @Output() archiveNoteIdArchiveContainer = new EventEmitter<number>();
 @Output() trashNoteIdTrashContainer = new EventEmitter<number>();
 
   
 colorOptions: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  constructor(private iconRegistry:MatIconRegistry, private sanitizer:DomSanitizer,private _notesService:NotesService) {
  iconRegistry.addSvgIconLiteral("brush-icon",sanitizer.bypassSecurityTrustHtml(BRUSH_ICON))
  iconRegistry.addSvgIconLiteral("img-icon",sanitizer.bypassSecurityTrustHtml(IMG_ICON))
  iconRegistry.addSvgIconLiteral("tick-icon",sanitizer.bypassSecurityTrustHtml(TICK_ICON))
  iconRegistry.addSvgIconLiteral("pin-icon",sanitizer.bypassSecurityTrustHtml(PIN_ICON))  
  iconRegistry.addSvgIconLiteral("reminder-icon",sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))   
  iconRegistry.addSvgIconLiteral("collabrator-icon",sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))  
  iconRegistry.addSvgIconLiteral("color-palatte-icon",sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))  
  iconRegistry.addSvgIconLiteral("archive-icon",sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)) 
  iconRegistry.addSvgIconLiteral("unarchive-icon",sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
  iconRegistry.addSvgIconLiteral("undo-icon",sanitizer.bypassSecurityTrustHtml(UNDO_ICON))  
  iconRegistry.addSvgIconLiteral("redo-icon",sanitizer.bypassSecurityTrustHtml(REDO_ICON)) 
  iconRegistry.addSvgIconLiteral("more-icon",sanitizer.bypassSecurityTrustHtml(MORE_ICON))  
  iconRegistry.addSvgIconLiteral("forever-icon",sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)) 
  iconRegistry.addSvgIconLiteral("restore-icon",sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))  
}

  ngOnInit(): void {
  }
 handleArchiveSendNoteId(){
   if(this.noteobj.isArchive === false){
    //it means it is in note container route
    this.archiveNoteIdNoteContainer.emit(this.noteobj.noteId);
   }
   else{
    //it means it is in archive container route
    this.archiveNoteIdArchiveContainer.emit(this.noteobj.noteId);
   }
 }

  handleArchiveNote(){
    if(this.noteobj && this.noteobj.noteId){
      // console.log(this.noteobj.noteId);
      this._notesService.archiveNote(this.noteobj.noteId).subscribe(
        archiveResponse =>{
          // console.log(archiveResponse);
          if(archiveResponse.success){
              this.handleArchiveSendNoteId();
            
          }
        }
      )
    }
  }
 
  handleTrashSendNoteId(){
    if(this.noteobj.isTrash === false){
     //it means it is in note container route
     this.archiveNoteIdNoteContainer.emit(this.noteobj.noteId);
    }
    else{
     //it means it is in archive container route
     this.trashNoteIdTrashContainer.emit(this.noteobj.noteId);
    }
  }
  handleTrashNote(){
    if(this.noteobj && this.noteobj.noteId){
      console.log(this.noteobj.noteId);
      this._notesService.trashNote(this.noteobj.noteId).subscribe(
        trashResponse =>{
         console.log(trashResponse);
         if(trashResponse.success){
           this.handleTrashSendNoteId();
         }
        }
      )

    }
  }


 

  handleSelectedColor(bgColor:string){
    console.log(this.noteobj.noteId)
    
    console.log(bgColor);
    this._notesService.updateBackgroundcolor(this.noteobj.noteId,bgColor).subscribe(
      bgColorResponse =>{
       
        console.log(bgColorResponse);
      }
    )
  }

}
