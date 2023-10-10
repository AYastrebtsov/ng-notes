import { createReducer, on } from "@ngrx/store";
import { Note } from "src/shared/interfaces/interfaces";
import * as actions from "./notes.actions";

export interface NotesState {
  data: Note[];
}

export const initialState: NotesState = {
  data: [],
};

export const NotesReducer = createReducer(
  initialState,
  on(actions.loadSuccess, (state: NotesState, action) => {
    return {
      ...state,
      data: action.data,
    };
  }),
  on(actions.createSuccess, (state: NotesState, action) => {
    return {
      ...state,
      data: [...state.data, action.data],
    };
  })
);
