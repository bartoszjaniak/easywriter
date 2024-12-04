import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-premium',
  host: {
    class:
      "block shadow h-60 bg-[#fefff1] bg-contain bg-no-repeat bg-right bg-[url('/premium.webp')] text-left p-4",
  },
  template: `
    <p class="text-2xl font-bold">10$/mc</p>
    <p class="text-xl text-bold">Premium</p>
    <p class="text-sm font-light max-w-[50%]">Check out our premium plan.</p>
  `,
})
export class DashboardPremiumComponent {}
