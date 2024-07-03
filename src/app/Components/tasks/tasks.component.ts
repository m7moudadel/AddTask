import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import {  addTask } from 'src/app/core/task';
import { TasksService } from 'src/app/core/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule , TaskComponent ,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({required:true}) userId!:string
@Input({required:true}) name!:string;
isAddingTask=false

constructor(private _TasksService:TasksService){}

get selectedUserTasks(){
  return this._TasksService.getUserTasks(this.userId)
}



onStartAtask(){
  this.isAddingTask = true

}

onCloesAddtask(){
  this.isAddingTask = false
}

onAddNewTask(taskData:addTask){
  this._TasksService.addTask
  this.isAddingTask=false
}
}
