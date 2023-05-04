import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input[ps-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {}
