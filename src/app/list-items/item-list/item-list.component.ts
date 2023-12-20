import { Component, Input } from '@angular/core'
import { Todo } from 'src/app/shared/todo.model'
import { StoreTodoService } from 'src/app/store-todo.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() todo: Todo

  constructor (private storeTodoService: StoreTodoService) {}

  checkboxStatusChanged () {
    this.storeTodoService.onChangeStatus(this.todo)
  }

  deleteTodo () {
    this.storeTodoService.onDeleteTodo(this.todo)
  }

  editTodo () {
    this.storeTodoService.onEditTodo(this.todo)
  }
}
