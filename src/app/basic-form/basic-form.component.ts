import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    email: '',
    message: 'default message',
    career: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
  }
}
