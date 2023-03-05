import { Component } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  errMessage: string;
  public note: Note = new Note();
  public notes: Array<Note> = [];

  constructor(private noteservice: NotesService) {
  }

  ngOnInit() {
    this.noteservice.getNotes().subscribe(
      data => {
        this.notes = data;
      },
      error => {
        this.errMessage = error.message;
      }
    )
  }

  public addnote() {
    if (this.note.title == '' || this.note.text == '') {
      this.errMessage = 'Title and Text both are required fields';
    }
    this.noteservice.addNote(this.note).subscribe(
      data => {
        this.notes.push(data);
      },
      error => {
        this.errMessage = error.message;
      }
    )
    this.note = new Note();
  }
}
