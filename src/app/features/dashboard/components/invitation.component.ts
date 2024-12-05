import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-invitation',
  host: {
    class:
      "block shadow h-60 bg-my-bg-light bg-contain bg-no-repeat bg-right bg-[url('/writer.webp')] text-left p-4",
  },
  template: `
    <p class="text-2xl font-bold">Hallo Bart</p>
    <p class="text-xl text-bold">How are you doing?</p>
    <p class="text-sm font-light max-w-[50%]">
      Last time you write 451 words. You can now write 1000 words today!
    </p>
  `,
})
export class DashboardInvitationComponent {}
