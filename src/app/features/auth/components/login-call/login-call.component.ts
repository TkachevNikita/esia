import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject} from "@angular/core";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {MatDialogContent} from "@angular/material/dialog";
import {BehaviorSubject, debounceTime, EMPTY, switchMap, timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginCallComponent implements AfterViewInit {
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
}
