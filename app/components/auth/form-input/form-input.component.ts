import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'auth-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  @Input() placeholder: string = '';

  @Input() field: AbstractControl = null;

  @Input() type: string = 'text';

  ngOnInit() {

  }

  get hasError() {
    return this.field.invalid && (this.field.dirty || this.field.touched);
  }

  get error() {
    if (this.hasError) {
        if (this.field.errors.required) {
            return `Cannot be empty`;
        }

        if (this.field.errors.maxlength) {
            return `Max length is ${this.field.errors.maxlength.requiredLength}`;
        }

        if (this.field.errors.email) {
            return `Must be a valid email`;
        }

        if (this.field.errors.incorrect) {
            return this.field.errors.incorrect.message;
        }

    }

    return null;
  }
}
