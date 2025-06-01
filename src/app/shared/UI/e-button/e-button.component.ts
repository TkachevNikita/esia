import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'e-button',
  templateUrl: './e-button.component.html',
  styleUrl: './e-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EButtonComponent {}
