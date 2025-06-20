import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {MatDialogContainer, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {CodeInputModule} from "angular-code-input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../../services/auth.service";

@Component({
  standalone: true,
  templateUrl: './login-code.component.html',
  styleUrl: './login-code.component.scss',
  imports: [
    MatDialogContent,
    CodeInputModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginCodeComponent {
  protected readonly authService = inject(AuthService);
  private readonly dialogRef = inject(MatDialogRef<LoginCodeComponent>);

  public completed(): void {
    this.dialogRef.close("done");
  }
}
