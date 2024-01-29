import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggledataService {
  private isSidebarOpenSource = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this.isSidebarOpenSource.asObservable();
  constructor() {
    
   }
  
  toggleSidebar(isOpen: boolean): void {
    this.isSidebarOpenSource.next(isOpen);
  }
}
