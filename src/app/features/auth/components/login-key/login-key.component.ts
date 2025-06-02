import {ChangeDetectionStrategy, Component, DestroyRef, inject} from "@angular/core";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {CodeInputModule} from "angular-code-input";
import {EInputComponent} from "../../../../shared/UI/e-input/e-input.component";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {BehaviorSubject, take, timer} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";
import {MatIcon} from "@angular/material/icon";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  selector: 'auth-login-key',
  templateUrl: './login-key.component.html',
  styleUrl: './login-key.component.scss',
  imports: [
    MatDialogContent,
    CodeInputModule,
    EInputComponent,
    EButtonComponent,
    AsyncPipe,
    MatIconButton,
    MatIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginKeyComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef = inject(MatDialogRef<LoginKeyComponent>);
  private readonly dialog = inject(MatDialog);

  public isLoading$ = new BehaviorSubject<boolean>(false);

  public confirm(): void {
    this.isLoading$.next(true);

    timer(4000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => location.href = 'https://gosuslugi.ru'
      })
  }

  public goBack(): void {
    this.dialogRef.close();
    this.dialog.open(LoginVariantsComponent, {
      width: '600px',
    });
  }
}
