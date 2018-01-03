import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
//import {NotificationComponent } from './../notification/notification.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  checked : false;
  constructor(public snackBar: MatSnackBar) { 

  }

  ngOnInit() {
     this.tasks = (localStorage.getItem('tasks') !== null) ? JSON.parse(localStorage.getItem('tasks')) : [];    
  }

  done(val){
 
    var item = this.getItem(val);    
    item.isDone = 1;
    this.tasks = this.removeItem(val); 
    //this.tasks.push(item); console.log(this.tasks);
    this.openSnackBar('1 item completed!!!','');
    if(this.tasks.length>0){
     localStorage.setItem('tasks',JSON.stringify(this.tasks));
    
    }else{ 
      localStorage.removeItem('tasks');
    }
  }

  getItem(val){
    return this.tasks.find(x => x.id === val);
  }
  removeItem(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
    return this.tasks;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
