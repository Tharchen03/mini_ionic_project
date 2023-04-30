import {  NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { InputComponent } from "./input/input.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[InputComponent],
    imports:[CommonModule,IonicModule],
    exports:[InputComponent],
   
})
export class InputModule{}






