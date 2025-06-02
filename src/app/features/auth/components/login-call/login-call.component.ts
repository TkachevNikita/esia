import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {BehaviorSubject, debounceTime, EMPTY, switchMap, timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";

@Component({
  standalone: true,
  selector: 'auth-login-call',
  templateUrl: './login-call.component.html',
  styleUrl: './login-call.component.scss',
  imports: [
    EButtonComponent,
    MatDialogContent,
    MatProgressSpinner,
    AsyncPipe,
    MatIcon,
    MatIconButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginCallComponent implements AfterViewInit {
  private readonly dialogRef = inject(MatDialogRef<LoginCallComponent>);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  public showLoader$ = new BehaviorSubject<boolean>(false);

  public ngAfterViewInit(): void {
    timer(4000)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap(() => {
          this.showLoader$.next(true)
          return timer(3000).pipe(
            switchMap(() => {
              this.showLoader$.next(false)
              this.snackBar.open('Вы успешно авторизовались', '', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
              });
              location.href = 'https://gosuslugi.ru';
              return EMPTY
            }),
            debounceTime(2000)
          )
        })
      )
      .subscribe({
        next: () => {
          location.href = 'https://gosuslugi.ru';
        }
      })
  }

  public goBack(): void {
    this.dialogRef.close();
    this.dialog.open(LoginVariantsComponent, {
      width: '600px',
    });
  }
}
