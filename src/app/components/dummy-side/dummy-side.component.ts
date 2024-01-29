import { Component, OnInit } from '@angular/core';
import { NOTE_ICON ,REMINDER_ICON,EDIT_ICON,ARCHIVE_ICON,TRASH_ICON} from 'src/assets/icons/svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-dummy-side',
  templateUrl: './dummy-side.component.html',
  styleUrls: ['./dummy-side.component.css']
})
export class DummySideComponent implements OnInit {

  constructor(private iconRegistry:MatIconRegistry,private sanitizer:DomSanitizer) { 

    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
  }

  ngOnInit(): void {
  }

}
