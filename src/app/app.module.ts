import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
 
//form validations
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotesComponent } from './components/notes/notes.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { materialize } from 'rxjs';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DummySideComponent } from './components/dummy-side/dummy-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardHeaderComponent,
    NotesComponent,
    SideNavBarComponent,
    DummySideComponent,
    DashboardComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatProgressSpinnerModule,
     MatCardModule,
     MatButtonModule,
     MatSidenavModule,
     BrowserAnimationsModule,
     MatMenuModule
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
