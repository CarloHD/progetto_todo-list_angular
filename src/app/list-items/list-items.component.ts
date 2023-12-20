import { Component, OnInit } from '@angular/core'
import { Todo } from '../shared/todo.model'
import { StoreTodoService } from '../store-todo.service'

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  listItems: Todo[]

  constructor (private storeTodoService: StoreTodoService) {}

  ngOnInit (): void {
    this.listItems = this.storeTodoService.todolist
  }
}

