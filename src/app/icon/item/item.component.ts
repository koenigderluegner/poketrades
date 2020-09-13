import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: '',
})
export class ItemComponent {


  @HostBinding('class.pokesprite') pokesprite = true;
  private slugClass: string | undefined;
  private categoryClass: string | undefined;

  @Input() set slug(sl: string) {
    this.slugClass = sl;
    this.classes = [this.slugClass, this.categoryClass].join(' ');
  }

  @Input() set category(cat: string) {
    this.categoryClass = cat;
  }

  @HostBinding('classes') classes: string | undefined;
}
