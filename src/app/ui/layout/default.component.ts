import { Component } from '@angular/core';

@Component({
  selector: 'layout-default',
  standalone: true,
  imports: [],
  template: `
    <aside class="w-1/6">
      <img src="logo.png" class="w-full p-5 m-auto" />
      <div
        class="h-24 w-24 m-auto mt-20 rounded-full bg-yellow-300 p-1 pb-0 overflow-hidden"
      >
        <img src="photo.png" class="max-w-full max-h-full m-auto" />
      </div>

      <div class="mt-4 font-bold">John Doe</div>
      <div class="text-sm text-gray-500">john.doe&#64;mail.com</div>

      <nav class="mt-32 flex flex-col gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </aside>
    <main class="w-5/6">
      <ng-content></ng-content>
    </main>
  `,
  host: {
    class: 'flex min-h-screen min-w-full',
  },
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
