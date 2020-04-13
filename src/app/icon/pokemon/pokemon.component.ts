import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '<ng-content></ng-content>',
  styleUrls: ['./pokemon.component.scss'],
  host: {class: 'pkspr'}
})
export class PokemonComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    const slug = this.elementRef.nativeElement.textContent;

    // TODO: Replace with Sprite
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${slug}.png`;
    this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.childNodes[0]);
    this.elementRef.nativeElement.appendChild(img);
  }

}
