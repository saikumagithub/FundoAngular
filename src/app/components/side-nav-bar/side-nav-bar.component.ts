import { Component, OnDestroy, OnInit } from '@angular/core';
import { NOTE_ICON ,REMINDER_ICON,EDIT_ICON,ARCHIVE_ICON,TRASH_ICON} from 'src/assets/icons/svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ToggledataService } from 'src/app/services/toggledata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit ,OnDestroy{
  isSidebarOpen = false;
  private subscription!: Subscription;
  constructor(private iconRegistry:MatIconRegistry,private sanitizer:DomSanitizer,private toggledataService:ToggledataService,private router:Router) { 

    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    
   
  }

  ngOnInit(): void {
    this.subscription = this.toggledataService.isSidebarOpen$.subscribe(
      (isOpen) => (this.isSidebarOpen = isOpen)
    )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  handelIconClick(route:string){
    this.router.navigate(['/dashboard'+route])
  }

}
