import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
  selector: 'app-index',
  imports: [LayoutDefaultComponent, MatIconModule],
  template: `
    <layout-default>
      <div class="flex w-full justify-between gap-4 mb-10">
        <div class="flex-grow">
          <h1 class="text-2xl font-bold text-left">Hallo, Bart</h1>
          <p class="text-gray-500 text-left">What do you want to do today?</p>
        </div>

        <button
          class="flex items-center justify-center bg-gray-200 text-white font-bold py-1 px-1 rounded h-10 w-10"
        >
          <mat-icon>search</mat-icon>
        </button>

        <button
          class="flex items-center justify-center bg-black  text-white font-bold py-2 px-4 rounded h-10"
        >
          Add new project
        </button>
      </div>

      <div class="flex flex-col space-y-6">
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-my-purple text-white p-6 rounded-lg shadow-lg">
            <h3 class="text-white font-bold text-lg">Web Development</h3>
            <p class="text-white mt-2">Design & Develop Mobile Apps</p>
          </div>
          <div class="bg-my-teal text-white p-6 rounded-lg shadow-lg">
            <h3 class="text-white font-bold text-lg">Mobile App Design</h3>
            <p class="text-white mt-2">Create intuitive mobile apps</p>
          </div>
          <div class="bg-my-orange text-white p-6 rounded-lg shadow-lg">
            <h3 class="text-white font-bold text-lg">Facebook Brand Kit</h3>
            <p class="text-white mt-2">Build your Facebook brand kit</p>
          </div>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 class="text-gray-800 font-bold text-2xl">Tasks for today</h2>
          <div class="mt-4 space-y-4">
            <div class="flex items-center justify-between">
              <p class="text-gray-700">Mobile App</p>
              <p class="text-gray-500">Ongoing project</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-gray-700">UI/UX refinements</p>
              <p class="text-gray-500">Ongoing project</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-gray-700">Mobile App</p>
              <p class="text-gray-500">Ongoing project</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 class="text-gray-800 font-bold text-2xl">Statistics</h2>
          <div class="mt-4 grid grid-cols-3 gap-6">
            <div>
              <p class="text-gray-500 text-sm">Time tracked</p>
              <p class="text-gray-800 font-bold text-2xl">28 h</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Tasks</p>
              <p class="text-gray-800 font-bold text-2xl">18</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Pro Plan</p>
              <p class="text-gray-800 font-bold text-2xl">$9.99/mo</p>
            </div>
          </div>
        </div>
      </div>
    </layout-default>
  `,
  styles: [],
})
export default class IndexComponent {}
