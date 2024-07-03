import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
// DUMMY_USERS
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS
selectedUserId?:string
  get userSelcetId(){
  return this.users.find((user)=> user.id === this.selectedUserId);
  }
  onSelctorUser(id:string){
  this.selectedUserId = id
  }
}
