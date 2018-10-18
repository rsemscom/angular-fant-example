import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    protected _email: string;

    get email(): AbstractControl {
        return this.form.get('email');
    }

    protected _password: string;

    get password(): AbstractControl {
        return this.form.get('password');
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
            ]),
            password: new FormControl(this._password, [
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
            {label: 'BACK', routerLink: '/auth/signup'},
            {label: 'TERMS & CONDITIONS', routerLink: '/auth/terms'},
            {label: 'FORGOT PASSWORD', routerLink: '/auth/reset'}
        ];
    }
}
