import { Component, DestroyRef } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { PrimeNGConfig } from "primeng/api";
import { Note } from "src/shared/interfaces/interfaces";
import { selectNotes } from "src/entites/notes/notes.selectors";
import { load, create } from "src/entites/notes/notes.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private router: Router,
    private store: Store,
    private destroyRef: DestroyRef
  ) {}

  title = "NG Notes";
  notes: Note[] = [];
  selectedNote: Note | null = null;
  visible: boolean = false;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.store.dispatch(load());

    this.store
      .select(selectNotes)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        const noteActive = this.location.path();

        console.log(noteActive);

        if (noteActive !== "" && value.length > 0) {
          const noteExists = value.find(
            (note) => note.id === Number(noteActive.slice(1))
          );

          if (noteExists) {
            this.selectedNote = noteExists;
          } else {
            this.selectedNote = null;
            this.router.navigateByUrl(``);
          }
        }
        this.notes = value;
      });
  }

  newNoteForm = this.formBuilder.group({
    header: this.formBuilder.control<string>("", {
      validators: [Validators.required],
    }),
    text: this.formBuilder.control<string>("", {
      validators: [Validators.required],
    }),
  });

  closeNote(): void {
    this.selectedNote = null;
    this.newNoteForm.reset();
    this.router.navigateByUrl("/");
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    if (this.newNoteForm.valid) {
      this.store.dispatch(
        create({
          id: this.notes.length + 1,
          header: this.newNoteForm.getRawValue().header,
          text: this.newNoteForm.getRawValue().text,
        })
      );
      this.newNoteForm.reset();
      this.visible = false;
    }
  }

  navigateTo(value: Note | null) {
    value
      ? this.router.navigateByUrl(`/${value.id}`)
      : this.router.navigateByUrl(`/`);
  }
}
