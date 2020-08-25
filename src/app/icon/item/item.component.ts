import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: '',
})
export class ItemComponent {


  @HostBinding('class.pokesprite') pokesprite = true;
  private slugClass: any;
  private categoryClass: any;

  @Input() set slug(sl) {
    this.slugClass = sl;
    this.classes = [this.slugClass, this.categoryClass].join(' ');
  }

  @Input() set category(cat) {
    this.categoryClass = cat;
  }

  @HostBinding('class') classes;

}
