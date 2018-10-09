import { NgModule } from "../../../node_modules/@angular/core";
import { ModuleWithProviders } from "../../../node_modules/@angular/compiler/src/core";
import { MyHttpService } from "./service/my-http.service";
import { UserService } from "./service/user.service";



@NgModule({
    exports: [],
    providers: [MyHttpService, UserService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            providers: [MyHttpService, UserService],
            ngModule: SharedModule
        }
    }

}