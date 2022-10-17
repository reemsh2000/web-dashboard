import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesComponent } from './notes/notes.component';
import { NotificationComponent } from './notification/notification.component';
import { TabsComponent } from './tabs/tabs.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    AddNoteComponent,
    AddTodoComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    EditNoteComponent,
    EditTodoComponent,
    ManageBookmarksComponent,
    NoteCardComponent,
    NotesComponent,
    NotificationComponent,
    TabsComponent,
    TodosComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
