import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }


    protected _name: string;

    get name(): AbstractControl {
        return this.form.get('name');
    }

    protected _email: string;

    get email(): AbstractControl {
        return this.form.get('email');
    }

    protected _password: string;

    get password(): AbstractControl {
        return this.form.get('password');
    }

    protected _repeat_password: string;

    get repeat_password(): AbstractControl {
        return this.form.get('repeat_password');
    }

    protected _error: string = null;

    get error(): string {
        return this._error;
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            name: new FormControl(this._name, [
                Validators.required,
                Validators.maxLength(50)
            ]),
            email: new FormControl(this._email, [
                Validators.required,
                Validators.maxLength(50),
                Validators.email
            ]),
            password: new FormControl(this._password, [
                Validators.required,
                Validators.maxLength(50),
            ]),
            repeat_password: new FormControl(this._repeat_password, [
                Validators.required,
                Validators.maxLength(50),
            ]),

        });
    }

    public onSubmit() {
        //here is on submit action

    }


    get authLinks() {
        return [
            {label: 'TERMS & CONDITIONS', routerLink: '/auth/terms'},
            {label: 'SIGN IN', routerLink: '/auth/login'}
        ];
    }

}
