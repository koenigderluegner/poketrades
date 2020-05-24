import { ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  template: '<div (cdkObserveContent)="projectContentChanged($event)"><ng-content></ng-content></div>',
  styleUrls: ['./pokemon.component.scss'],
  host: {class: 'pkspr'}
})
export class PokemonComponent implements OnInit, OnChanges {
  private dataChanges: Subscription;



  constructor(private elementRef:ElementRef, private cd: ChangeDetectorRef,  private obs: ContentObserver) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked():void{
    this.cd.markForCheck();
  }





  ngAfterViewInit() {

    const slug = this.elementRef.nativeElement.textContent;

    // TODO: Replace with Sprite
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${slug}.png`;





    this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.childNodes[0]);
    this.elementRef.nativeElement.appendChild(img);

    this.dataChanges = this.obs.observe(this.elementRef.nativeElement)
      .subscribe((event: MutationRecord[]) => {
        console.log('Change Detected.', event);

      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('pike poke', changes);
  }


  projectContentChanged($event) {
    console.log('adfdfd', $event);
    const slug = $event[0].target.data;

    // TODO: Replace with Sprite
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${slug}.png`;





    this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.childNodes[0]);
    this.elementRef.nativeElement.appendChild(img);
  }
}
