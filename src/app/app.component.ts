import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  genders = ['male', 'female'];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      gender: new FormControl('male', [Validators.required]),
      married: new FormControl(false, [Validators.required]),
      country: new FormControl('india', [Validators.required]),
    });
  }

  OnSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.onReset();
    }
  }

  onReset() {
    this.form.reset({
      fname: null,
      lname: null,
      email: null,
      gender: 'male',
      married: false,
      country: 'india',
    });
  }
}
