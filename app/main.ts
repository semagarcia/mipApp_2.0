// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule } from "@angular/core";

import { routes, navigatableComponents } from './app.router';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot( routes )
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);