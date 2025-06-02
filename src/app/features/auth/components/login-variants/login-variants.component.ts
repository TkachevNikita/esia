import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CodeInputModule} from "angular-code-input";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {LoginCallComponent} from "../login-call/login-call.component";
import {LoginCodeComponent} from "../login-code/login-code.component";

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
    MatIconButton,
    MatTooltip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginVariantsComponent {
  private readonly dialog = inject(MatDialog);
  private readonly dialogRef = inject(MatDialogRef<LoginCodeComponent>);

  public selectVariant(variant: 'qr' | 'call' | 'nfc'): void {
    switch (variant) {
      case "call":
        this.dialogRef.close();
        const dialogRef = this.dialog.open(LoginCallComponent, {
          width: '600px',
          height: '550px'
        });
    }
  }
}
