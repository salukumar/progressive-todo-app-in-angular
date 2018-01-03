import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatMenuModule,MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSnackBarModule
  ],
 
  declarations: [DashboardComponent],
  bootstrap: [DashboardComponent]
  
})
export class DashboardModule { }
