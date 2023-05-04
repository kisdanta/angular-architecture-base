import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

export type DividerHeight = 'thin' | 'medium' | 'thick';

@Component({
  selector: 'divider',
  template: '',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent implements OnInit {
  @Input() height: DividerHeight = 'thin';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom-width',
      this.height
    );
  }
}
