import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  input,
  output,
} from '@angular/core';
import { ClickStopPropagationDirective } from '../../directives/stop-propagation.directive';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ClickStopPropagationDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public positions = input<{ label: string; key: string }[]>();

  public onAction = output<string>();

  private elementRef = inject(ElementRef);

  @ViewChild('dropdown')
  private dropdown!: ElementRef;

  protected toggleDropdown() {
    this.dropdown.nativeElement.classList.toggle('show');
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.nativeElement.classList.remove('show');
    }
  }
}
