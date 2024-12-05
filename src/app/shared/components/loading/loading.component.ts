import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template:
    '<span class="loader"></span><span class="text"><ng-content/><span>',
  styles: `
    @import 'colors';

    @keyframes animloader {
      0% {
        box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
      }
      33% {
        box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
      }
      66% {
        box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
      }
      100% {
        box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
      }  
    } 
 :host{
  display: flex;
  flex-direction: column;
  align-items: center;
 }

 .text {
  font-size: 10px;
 }
  .loader {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
    margin:15px auto;
    position: relative;
    color: $blue-munsell;
    box-sizing: border-box;
    animation: animloader 1s linear infinite alternate;
  } `,
})
export class LoadingComponent {}
