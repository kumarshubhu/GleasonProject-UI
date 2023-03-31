import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class UniversalVariable {
    isValidUserOrNot: boolean = false;
    isAtDashboardPage: boolean = false;
  }