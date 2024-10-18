import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ElementComponent } from './app/element/element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ElementComponent],
  template: `
    <h1>Welcome to {{ name }}</h1>
    <app-element></app-element>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);