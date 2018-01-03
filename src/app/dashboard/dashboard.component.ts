import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

// import {MatCardModule} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  task = {task_name : '', task_date : ''};
  tasks = [];
   newId =  1;
  constructor(private router : Router, public snackBar: MatSnackBar) {
      this.tasks = (localStorage.getItem('tasks') !== null) ? JSON.parse(localStorage.getItem('tasks')) : [];
   }

  ngOnInit() {
  }

  onSubmit() {
    if (localStorage.getItem('tasks') !== null) {
      var last_key = this.tasks.length-1;
      var value =  this.tasks[last_key]['id'];
      this.newId = value + 1;
    }
    this.tasks = (localStorage.getItem('tasks') !== null) ? JSON.parse(localStorage.getItem('tasks')) : [];
    this.tasks.push({'id' : this.newId , 'name' : this.task.task_name , 'isDone' : 0});
    localStorage.setItem('tasks' , JSON.stringify(this.tasks));
    this.openSnackBar(this.task.task_name + ' added!!!' , '');
    this.tasks = (localStorage.getItem('tasks') !== null) ? JSON.parse(localStorage.getItem('tasks')) : [];
    this.task = {task_name : '', task_date : ''};
  }

  toTasks(){
    this.router.navigate(['/tasks']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
