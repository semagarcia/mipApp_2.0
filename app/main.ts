// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule } from "@angular/core";

import { routes, navigatableComponents } from './app.router';

import { AppComponent } from "./app.component";
import { ButtonMipComponent } from "./pages/controlMip/buttonMip.component";
import { SpeedMipComponent } from './pages/controlMip/speedMip.component';
import { ServiceMip } from './shared/serviceMip.service';
import { PermissionsService } from './shared/permissionsMip.service';

@NgModule({
    declarations: [
        AppComponent,
        ButtonMipComponent,
        SpeedMipComponent,
        ...navigatableComponents
    ],
    providers: [ 
        ServiceMip,
        PermissionsService 
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