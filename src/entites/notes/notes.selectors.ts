import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotesState } from "./notes.reducer";

export const notesState = createFeatureSelector<NotesState>("notes");
export const selectNotes = createSelector(notesState, (state) => state.data);
