import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatDialogModule} from "@angular/material";

import {AuthModule} from "./components/auth/auth.module";
import {ApplicationComponent} from './application.component';

import {ApplicationRoutingModule} from "./application-routing.module";

@NgModule({
    declarations: [
        ApplicationComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AuthModule,
        MatButtonModule,
        MatDialogModule,
        ApplicationRoutingModule
    ],
    providers: [],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule {

}
