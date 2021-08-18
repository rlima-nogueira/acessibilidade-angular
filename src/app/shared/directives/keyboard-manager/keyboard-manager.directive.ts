import { ContentChildren, QueryList } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  constructor() { }

  @ContentChildren(KeyboardManagerDirective) public items: QueryList<KeyboardManagedItemDirective> = null;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
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
