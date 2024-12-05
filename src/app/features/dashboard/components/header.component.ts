import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  imports: [MatIconModule, RouterModule],
  template: `
    <div class="flex w-full justify-between gap-4 mb-10">
      <div class="flex-grow">
        <img src="logo.png" class="h-8" />
      </div>

      <a routerLink="/editor/new" class="flex items-center justify-center">
        <mat-icon>settings</mat-icon>
      </a>
    </div>
  `,
})
export class DashboardHeaderComponent {}
