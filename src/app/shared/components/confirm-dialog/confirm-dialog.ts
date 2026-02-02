import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: `
    <div class="dialog">
      <p>{{ message }}</p>
      <button (click)="confirm()">Sí</button>
      <button (click)="cancel()">No</button>
    </div>
  `
})
export class ConfirmDialogComponent {
  @Input() message = '¿Está seguro?';
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
