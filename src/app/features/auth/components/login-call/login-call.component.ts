import {ChangeDetectionStrategy, Component} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {MatDialogContent} from "@angular/material/dialog";

@Component({
  standalone: true,
  selector: 'auth-login-call',
  templateUrl: './login-call.component.html',
  styleUrl: './login-call.component.scss',
  imports: [
    EButtonComponent,
    MatDialogContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginCallComponent {}
