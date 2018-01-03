import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {TasksComponent } from './../tasks/tasks.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {

   }

  ngOnInit() {
  }

 openSnackBar() {
    this.snackBar.openFromComponent(TasksComponent, {
      duration: 500,
    });
  }
}
