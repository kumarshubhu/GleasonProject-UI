import { Component } from '@angular/core';
import { UniversalVariable } from './universal.variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public univar: UniversalVariable) {

  }
  title = 'UserInterface';
}
