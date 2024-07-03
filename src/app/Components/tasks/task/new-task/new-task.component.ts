import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from 'src/app/core/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
@Output() close = new EventEmitter<void>()
Error:string =''
constructor(private _TasksService:TasksService){}
// enterdTitle=''
// enterdSummry=''
// enterdTime=''

taskForm:FormGroup = new FormGroup({
  enterdTitle:new FormControl(""),
  enterdSummry:new FormControl(''),
  enterdTime:new FormControl('')
})

onCancle(){
  return this.close.emit()
}


addTask(group:FormGroup){
let  title = group.get('enterdTitle')
let  summary = group.get('enterdSummry')
let date =group.get('enterdTime')
if (title?.value!=='' && summary?.value!=='' && date?.value!=='') {
  this._TasksService.addTask({
    title: title?.value,
    summary: summary?.value,
    dueDate: date?.value
  } ,this.userId)
  this.close.emit()
}else{
 this.Error ='Please Check Your Inputs'
}

}
}
