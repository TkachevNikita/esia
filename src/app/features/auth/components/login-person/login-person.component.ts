import {AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject} from "@angular/core";
import {CodeInputModule} from "angular-code-input";
import {MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";

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
    EButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPersonComponent {}
