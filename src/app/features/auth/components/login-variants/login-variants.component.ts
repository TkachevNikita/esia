import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CodeInputModule} from "angular-code-input";
import {MatDialogContent} from "@angular/material/dialog";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {EButtonComponent} from "../../../../shared/UI/e-button/e-button.component";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";


@Component({
  standalone: true,
  selector: 'auth-login-variants',
  styleUrl: './login-variants.component.scss',
  templateUrl: './login-variants.component.html',
  imports: [
    CodeInputModule,
    MatDialogContent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatIcon,
    EButtonComponent,
    MatIconButton,
    MatTooltip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginVariantsComponent {}
