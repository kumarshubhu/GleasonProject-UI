import { Component } from '@angular/core';
import { UniversalVariable } from '../universal.variable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private univar:UniversalVariable) {
  }
  RouteMeToDashboardPage(): void {
  this.univar.isAtDashboardPage = true;
  } 
}
