import { Component, HostBinding, Input } from '@angular/core';
// @ts-ignore
import { default as categoryData } from './categories.json';

@Component({
  selector: 'app-item',
  template: '',
  standalone: false
})
export class ItemComponent {


  @HostBinding('class') classes: string | undefined;
  @HostBinding('class.pokesprite') private pokespriteClass = true;
  @HostBinding('class.item-icon') private itemIconClass = true;
  private slugClass: string | undefined;
  private categoryClass: string | undefined;
  private suffixLess?: string;

  @Input() set slug(sl: string) {
    this.slugClass = sl;
    const category = this.category;
    if (this.suffixLess) {
      this.classes = [this.suffixLess, category].join(' ');
    } else {
      this.classes = [this.slugClass, category].join(' ');
    }

  }

  get category(): string {
    const categories: Record<string, string> = categoryData;
    if (this.categoryClass) {
      return this.categoryClass;
    } else if (this.slugClass) {
      let category = categories[this.slugClass];
      if (!category) {
        const suffixLess = this.slugClass.substring(0, this.slugClass.lastIndexOf('-'));
        category = categories[suffixLess];
        if (category) {
          this.suffixLess = suffixLess;
        }
      }
      return category;
    }
    return '';
  }

  @Input() set category(cat: string) {
    this.categoryClass = cat;
  }
}
