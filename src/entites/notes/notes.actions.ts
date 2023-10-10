import { createAction, props } from "@ngrx/store";
import { Note } from "src/shared/interfaces/interfaces";

export const load = createAction("[Notes Entity] Load");

export const loadSuccess = createAction(
  "[Notes Entity] Load Success",
  props<{ data: Note[] }>()
);
export const create = createAction("[Notes Entity] Create", props<Note>());

export const createSuccess = createAction(
  "[Notes Entity] Create Success",
  props<{ data: Note }>()
);
