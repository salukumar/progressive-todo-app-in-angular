import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatMenuModule, MatCheckboxModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: [TasksComponent],
  bootstrap: [TasksComponent]
})
export class TasksModule { }
