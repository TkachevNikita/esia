import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {EInputComponent} from "../../../../shared/UI/e-input/e-input.component";
import {LoginCodeComponent} from "../login-code/login-code.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";
import {debounceTime, take} from "rxjs";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    EButtonComponent,
    EInputComponent,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private readonly dialog = inject(MatDialog);

  public loginControl: FormControl<string> = new FormControl<string>('',
    { nonNullable: true, validators: Validators.required }
  );

  public open(): void {
    if (!this.loginControl.invalid) {
      const dialogRef = this.dialog.open(LoginCodeComponent);

      dialogRef.afterClosed()
        .pipe(take(1), debounceTime(500))
        .subscribe((value) => {
          if (value) {
            this.dialog.open(LoginVariantsComponent, {
              width: '600px'
            })
          }
        });
    }
  }
}
