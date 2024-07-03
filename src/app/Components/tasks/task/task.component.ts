import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/core/task';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../../card/card.component';
import { TasksService } from 'src/app/core/tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule , NewTaskComponent ,CardComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
@Input({required:true}) task!:Task;
constructor(private _TasksService:TasksService){}
onCompletedTask(){
this._TasksService.removeTask(this.task.id)
}
}
