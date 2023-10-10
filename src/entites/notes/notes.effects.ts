import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { NotesService } from "./notes.service";
import { mergeMap, map } from "rxjs";
import * as noteActions from "./notes.actions";

@Injectable({
  providedIn: "root",
})
export class NotesEffects {
  constructor(
    private notesService: NotesService,
    private actions$: Actions
  ) {}

  loadNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(noteActions.load),
      mergeMap(() =>
        this.notesService.loadNotes().pipe(
          map((res) => {
            return noteActions.loadSuccess({ data: res.result });
          })
        )
      )
    );
  });

  createNote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(noteActions.create),
      mergeMap((action) =>
        this.notesService.createNote(action).pipe(
          map(() => {
            return noteActions.createSuccess({ data: action });
          })
        )
      )
    );
  });
}
