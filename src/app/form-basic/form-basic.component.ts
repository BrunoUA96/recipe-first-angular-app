import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.scss'],
})
export class FormBasicComponent implements OnInit {
  evilBatton = false;

  constructor() {}

  user = {
    name: '',
    email: '',
    pass: '',
    gender: 'male',
  };

  genders = ['male', 'female'];

  ngOnInit() {}

  submit(form: NgForm) {
    console.log(form);
  }
}
