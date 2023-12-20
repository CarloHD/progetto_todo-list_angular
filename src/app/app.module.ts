import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { InputTextComponent } from './input-text/input-text.component'
import { ListItemsComponent } from './list-items/list-items.component'
import { ItemListComponent } from './list-items/item-list/item-list.component'

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    ListItemsComponent,
    ItemListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
