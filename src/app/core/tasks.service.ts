import { Injectable } from '@angular/core';
import { dummyTasks } from '../tasks';
import { addTask } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private  tasks = dummyTasks;
constructor(){
  const task = localStorage.getItem('tasks')
  if(task){
     this.tasks =JSON.parse(task)
  }
}
getUserTasks(userId:string){
  return this.tasks.filter((task)=> task.userId === userId)
}


addTask(taskData:addTask ,userId:string){
  this.tasks.unshift({
    id: new Date().getTime().toString(),
  userId: userId,
    title: taskData.title,
    summary:taskData.summary,
    dueDate: taskData.dueDate
  }),
  this.saveTask()
}

removeTask(id:string){
  this.tasks =  this.tasks.filter(task => task.id !== id)
this.saveTask()
}

saveTask(){
  localStorage.setItem('tasks', JSON.stringify(this.tasks))
}
}
