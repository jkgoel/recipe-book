import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropDownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder.directive";

@NgModule({
  declarations: [
    DropDownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [CommonModule],
  exports: [
    DropDownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
