import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject} from "@angular/core";
import {CodeInputModule} from "angular-code-input";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {LoginCallComponent} from "../login-call/login-call.component";
import {MatIconButton} from "@angular/material/button";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";

@Component({
  standalone: true,
  selector: 'auth-login-person',
  templateUrl: './login-person.component.html',
  styleUrl: './login-person.component.scss',
  imports: [
    CodeInputModule,
    MatDialogContent,
    MatIcon,
    MatProgressSpinner,
    EButtonComponent,
    MatIconButton
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPersonComponent {
  private readonly dialogRef = inject(MatDialogRef<LoginPersonComponent>);
  private readonly dialog = inject(MatDialog);

  public redirect(point: 'qr' | 'call'): void {
    switch (point) {
      case "call":
        this.dialogRef.close();
        this.dialog.open(LoginCallComponent, {
          width: '600px',
        });
        break;
    }
  }

  public goBack(): void {
    this.dialogRef.close();
    this.dialog.open(LoginVariantsComponent, {
      width: '600px',
    });
  }
}
