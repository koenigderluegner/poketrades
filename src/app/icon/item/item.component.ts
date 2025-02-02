import { Component, Input } from '@angular/core';
// @ts-ignore
import { default as categoryData } from './categories.json';

@Component({
  selector: 'app-item',
  template: '',
  host: {
    'class': 'pokesprite item-icon',
    '[class]': 'classes',
  }
})
export class ItemComponent {

  classes: string | undefined;
  private slugClass: string | undefined;
  private categoryClass: string | undefined;
  private suffixLess?: string;

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
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

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set category(cat: string) {
    this.categoryClass = cat;
  }
}
