import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'e-button',
  templateUrl: './e-button.component.html',
  styleUrl: './e-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EButtonComponent {
  @Input()
  public variant: 'filled' | 'outlined' = 'filled';

  @Input()
  public disabled = false;
}
