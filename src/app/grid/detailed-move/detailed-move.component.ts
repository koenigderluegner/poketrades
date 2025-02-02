import { booleanAttribute, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { PokemonComponent } from "../../icon/pokemon/pokemon.component";

@Component({
  selector: 'app-detailed-move',
  templateUrl: './detailed-move.component.html',
  styleUrls: ['./detailed-move.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    PokemonComponent
  ],
  host: {
    'class': 'detailed-move',
    '[class]': 'typeClass()'
  }
})
export class DetailedMoveComponent {

  move = input<string>('unknown');
  type = input<string>('unknown');
  isEggMove = input(false, {transform: booleanAttribute});
  typeClass = computed(() => 'move-' + this.type());


}
