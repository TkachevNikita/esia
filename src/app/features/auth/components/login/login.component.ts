import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {EInputComponent} from "../../../../shared/UI/e-input/e-input.component";
import {LoginCodeComponent} from "../login-code/login-code.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";

@Component({
  standalone: true,
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    EButtonComponent,
    EInputComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly dialog = inject(MatDialog);

  open(): void {
    this.dialog.open(LoginVariantsComponent)
  }
}
