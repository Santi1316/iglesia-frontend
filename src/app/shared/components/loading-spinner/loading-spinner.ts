import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="spinner">
      <div class="loader"></div>
    </div>
  `
})
export class LoadingSpinnerComponent {}
