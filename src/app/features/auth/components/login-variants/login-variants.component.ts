import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CodeInputModule} from "angular-code-input";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {LoginCallComponent} from "../login-call/login-call.component";
import {LoginCodeComponent} from "../login-code/login-code.component";
import {LoginPersonComponent} from "../login-person/login-person.component";
import {LoginKeyComponent} from "../login-key/login-key.component";

@Component({
  standalone: true,
  selector: 'auth-login-variants',
  styleUrl: './login-variants.component.scss',
  templateUrl: './login-variants.component.html',
  imports: [
    CodeInputModule,
    MatDialogContent,
    MatIcon,
    EButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginVariantsComponent {
  private readonly dialog = inject(MatDialog);
  private readonly dialogRef = inject(MatDialogRef<LoginCodeComponent>);

  public selectVariant(variant: 'qr' | 'call' | 'nfc' | 'person' | 'code'): void {
    switch (variant) {
      case "call":
        this.dialogRef.close();
        this.dialog.open(LoginCallComponent, {
          width: '600px',
        });
        break;
      case "person":
        this.dialogRef.close();
        this.dialog.open(LoginPersonComponent);
        break;
      case 'code':
        this.dialogRef.close();
        this.dialog.open(LoginKeyComponent, {
          width: '600px'
        });
        break;
    }
  }
}
