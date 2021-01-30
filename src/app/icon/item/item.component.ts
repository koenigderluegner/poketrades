import { Component, HostBinding, Input } from '@angular/core';
// @ts-ignore
import { default as categoryData } from './categories.json';

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
    this.classes = [this.slugClass, this.category].join(' ');
  }

  @Input() set category(cat: string) {
    this.categoryClass = cat;
  }

  get category(): string {
    if (this.categoryClass) {
      return this.categoryClass;
    } else if (this.slugClass) {
      return categoryData[this.slugClass];
    }
    return '';
  }



  @HostBinding('class') classes: string | undefined;
}
