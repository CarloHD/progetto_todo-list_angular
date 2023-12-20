import { Component } from '@angular/core'
import { StoreTodoService } from '../store-todo.service'

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  textValue = ''

  constructor (private storeTodoService: StoreTodoService) {}

  addTodo () {
    this.storeTodoService.onAddTodo(this.textValue)
    this.textValue = ''
  }
}
