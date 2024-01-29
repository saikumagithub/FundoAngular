import { Component, OnInit } from '@angular/core';
import {MENU_ICON,SEARCH_ICON,REFRESH_ICON,LIST_VIEW_ICON,SETTING_ICON} from './../../../assets/icons/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { ToggledataService } from 'src/app/services/toggledata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  sideOpenState:boolean=false;
  constructor(private iconRegistry:MatIconRegistry, private sanitizer:DomSanitizer,private toggledataService:ToggledataService,private router:Router) { 
    iconRegistry.addSvgIconLiteral("menu-icon",sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("search-icon",sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon",sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("list-view-icon",sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("setting-icon",sanitizer.bypassSecurityTrustHtml(SETTING_ICON))

  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sideOpenState = !this.sideOpenState;
    this.toggledataService.toggleSidebar(this.sideOpenState);
  }

  handleLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
}
