import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    protected _email: string;

    get email(): AbstractControl {
        return this.form.get('email');
    }

    protected _error: string = null;

    get error(): string {
        return this._error;
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            email: new FormControl(this._email, [
                Validators.required,
                Validators.maxLength(50),
                Validators.email
            ])

        });
    }

    public onSubmit() {
        //here is on submit action

    }


    get authLinks() {
        return [
            {label: 'BACK', routerLink: '/auth/login'},
            {label: 'TERMS & CONDITIONS', routerLink: '/auth/terms'},
        ];
    }

}
