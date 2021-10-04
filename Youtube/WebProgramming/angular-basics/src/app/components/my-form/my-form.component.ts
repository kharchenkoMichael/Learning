import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
      }),
      email: new FormControl("", [Validators.required,
      Validators.pattern("[^@]*@[^@]*")]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

}
