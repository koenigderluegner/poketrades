import { booleanAttribute, Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'pokesprite pokemon',
    '[class]': 'className()',
    '[class.shiny]': 'shiny()',
  }
})
export class PokemonComponent {

  readonly shiny = input(false, {transform: booleanAttribute})
  readonly slug = input<string>()
  protected readonly className = computed(() => this.slug()?.split('/').join(' '))

}
