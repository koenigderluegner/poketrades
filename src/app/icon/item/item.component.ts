import { Component, computed, input } from '@angular/core';
import { default as categoryData } from './categories.json';

@Component({
  selector: 'app-item',
  template: '',
  host: {
    'class': 'pokesprite item-icon',
    '[class]': 'classes()',
  }
})
export class ItemComponent {
  categories: Record<string, string> = categoryData;
  slug = input<string>()
  category = input<string>()
  classes = computed(() => {

    const slugClass = this.slug();
    const category = this.category();
    let categoryClass = ''
    let suffixLessClass: string | undefined;

    if (category) {
      categoryClass = category;
    } else if (slugClass) {
      let searchedCategory = this.categories[slugClass];
      if (!searchedCategory) {
        const suffixLess = slugClass.substring(0, slugClass.lastIndexOf('-'));
        categoryClass = this.categories[suffixLess];
        if (categoryClass) {
          suffixLessClass = suffixLess;
        }
      } else {
        categoryClass = searchedCategory;
      }
    }

    if (suffixLessClass) {
      return [suffixLessClass, categoryClass].join(' ');
    } else {
      return [slugClass, categoryClass].join(' ');
    }
  });
}
