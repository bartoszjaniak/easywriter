import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickStopPropagationDirective } from '../../directives/stop-propagation.directive';
import { MenuComponent } from '../menu/menu.component';

export interface HiddenMenuPosition {
  label: string;
  key: string;
}

@Component({
  selector: 'app-hidden-menu',
  imports: [CommonModule, MenuComponent, ClickStopPropagationDirective],
  templateUrl: './hidden-menu.component.html',
  styleUrl: './hidden-menu.component.scss',
})
export class HiddenMenuComponent {
  @Input() public menuPositions!: HiddenMenuPosition[];
  @Output() public onAction = new EventEmitter<string>();
}
