import { Injectable } from '@angular/core'
import { Todo } from './shared/todo.model'

@Injectable({
  providedIn: 'root'
})
export class StoreTodoService {
  todolist: Todo[] = [new Todo('test'), new Todo('asd')]

  onChangeStatus (todoToChangeStatus: Todo) {
    const todoIndex = this.todolist.findIndex(
      todo => todo === todoToChangeStatus
    )
    this.todolist[todoIndex].isChecked = !this.todolist[todoIndex].isChecked
  }

  onAddTodo (text: string) {
    this.todolist.push(new Todo(text))
  }

  onDeleteTodo (todoToRemove: Todo) {
    const todoIndex = this.todolist.findIndex(todo => todo === todoToRemove)

    this.todolist.splice(todoIndex, 1)
  }

  onEditTodo (todoToEdit: Todo) {
    const newText = prompt('Inserisci il nuovo testo', todoToEdit.text)
    if (newText === null) {
      return
    }
    todoToEdit.text = newText
  }
}
