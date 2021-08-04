import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor(private formBilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   username: new FormControl('Bruno', Validators.required),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(
    //       "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    //     ),
    //   ]),
    //   pass: new FormControl('', Validators.required),
    //   gender: new FormControl('male'),
    //   hobbies: new FormArray([
    //     new FormControl('Java Script', Validators.required),
    //   ]),
    // });
    this.myForm = this.formBilder.group({
      username: ['Bruno', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          ),
        ],
      ],
      pass: ['', Validators.required],
      gender: ['male'],
      hobbies: formBilder.array([['Java Script', Validators.required]]),
    });
  }

  ngOnInit() {}

  // addNewHobbie() {
  //   (<FormArray>this.myForm.controls['hobbies']).push(
  //     new FormControl('', Validators.required)
  //   );
  // }

  addNewHobbie() {
    (this.myForm.get('hobbies') as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
