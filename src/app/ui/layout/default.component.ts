import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardHeaderComponent } from '../../features/dashboard/components/header.component';

@Component({
  selector: 'layout-default',
  imports: [MatIconModule, DashboardHeaderComponent],
  host: {
    class: 'flex min-h-screen min-w-full',
  },
  template: `
    <aside
      class="flex flex-col items-center w-20 bg-black text-white rounded-3xl m-6 p-3 py-6 shadow"
    >
      <div class="h-10 w-10 rounded-full bg-white overflow-hidden mb-20">
        <img src="photo.png" class="max-w-full max-h-full m-auto" />
      </div>
      <nav class="flex flex-col flex-grow gap-10">
        <mat-icon>home</mat-icon>
        <mat-icon>article</mat-icon>
        <mat-icon>inventory_2</mat-icon>
        <mat-icon>settings</mat-icon>
      </nav>

      <mat-icon>logout</mat-icon>
    </aside>
    <main class="flex-grow p-6 max-h-screen overflow-auto">
      <app-dashboard-header />
      <ng-content></ng-content>
    </main>
  `,

  styles: [
    `
      aside {
        border-right: 2px solid transparent;
        border-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 5%,
            rgba(0, 0, 0, 0.05) 7%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.05) 93%,
            rgba(0, 0, 0, 0) 95%
          )
          1;
      }
    `,
  ],
})
export class LayoutDefaultComponent {}
