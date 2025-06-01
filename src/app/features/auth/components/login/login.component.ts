import {ChangeDetectionStrategy, Component} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {EInputComponent} from "../../../../shared/UI/e-input/e-input.component";

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
export class LoginComponent {}
