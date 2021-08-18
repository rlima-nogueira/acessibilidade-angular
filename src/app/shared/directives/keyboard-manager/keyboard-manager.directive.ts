import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('pra cima');
        break;
      case 'ArrowDown':
        console.log('pra baixo');
        break;
      case 'ArrowLeft':
        console.log('pra esquerda');
        break;
      case 'ArrowRight':
        console.log('pra direita');
        break;
    }
  }

}
