import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return `$ ${value.toLocaleString('es-CO')}`;
  }
}
