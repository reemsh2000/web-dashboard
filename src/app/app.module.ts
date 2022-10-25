import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }],
  },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
];
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
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
