import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from "@angular/core";
import {MatDialog, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {BehaviorSubject, switchMap, take, timer} from "rxjs";
import {LoginVariantsComponent} from "../login-variants/login-variants.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  templateUrl: './login-physic.component.html',
  styleUrl: './login-physic.component.scss',
  imports: [
    MatDialogContent,
    MatIcon,
    MatIconButton,
    AsyncPipe,
    MatProgressSpinner
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPhysicComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef = inject(MatDialogRef<LoginPhysicComponent>);
  private readonly dialog = inject(MatDialog);

  public isLoading$ = new BehaviorSubject<boolean>(false);

  public ngAfterViewInit(): void {
    timer(4000)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap(() => {
          this.isLoading$.next(true);
          return timer(3000);
        })
      )
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
