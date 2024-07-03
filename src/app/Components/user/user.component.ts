import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from 'src/app/core/users';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule ,CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
@Input({required:true}) users!:Users
@Input({required:true}) selected!:boolean


@Output() select =new EventEmitter<string>()


get imgPath(){
return './assets/users/'+  this.users.avatar
}

onSelctorUser(){
this.select.emit(this.users.id)


}
}
