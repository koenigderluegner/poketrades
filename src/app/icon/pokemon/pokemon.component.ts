import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '<div (cdkObserveContent)="projectContentChanged($event)"><ng-content></ng-content></div>',
  styleUrls: ['./pokemon.component.scss'],
  host: {class: 'pkspr'}
})
export class PokemonComponent implements OnInit {

  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.cd.markForCheck();
  }


  ngAfterViewInit() {

    const slug = this.elementRef.nativeElement.textContent;
    this.setImage(slug);

  }

  projectContentChanged($event) {
    const slug = $event[0].target.data;
    this.setImage(slug);

  }

  private setImage(slug) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${slug}.png`;

    this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.childNodes[0]);
    this.elementRef.nativeElement.appendChild(img);
  }
}
