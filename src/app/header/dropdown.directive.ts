import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  private isOpenDir = false;

  @HostBinding('class.show') get opened() {
    return this.isOpenDir;
  }

  @HostListener('click') open() {
    this.isOpenDir = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpenDir = false;
  }
}
