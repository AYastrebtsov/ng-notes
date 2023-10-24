import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Note } from "src/shared/interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  constructor(private http: HttpClient) {}

  loadNotes() {
    return this.http.get<{ result: Note[]; status: "success" }>(
      "https://run.mocky.io/v3/c9d441b3-26e6-4ec8-9921-f22a7276243d"
    );
  }

  createNote(note: Note) {
    const bodyFormData = new FormData();
    bodyFormData.append("id", `${note.id}`);
    bodyFormData.append("sms", note.header);
    bodyFormData.append("text", note.text);

    return this.http.post<{ status: "success" }>(
      "https://run.mocky.io/v3/08f45f6c-84a0-4865-8d19-77c9b9059d92",
      bodyFormData
    );
  }
}
