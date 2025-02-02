import { Component, HostBinding, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { forkJoin, Observable, of } from 'rxjs';
import { PokemonEntry } from '../../database/models/pokemon-entry.interface';
import { Move } from '../../database/models/move.interface';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailedComponent extends GridBaseAppearanceDirective implements OnInit, OnChanges {

  @HostBinding('class.grid-item') isGridItem = true;
  isEggMove$: Observable<boolean[]> | undefined;
  natureClass = '';
  dbpokemon$: Observable<PokemonEntry> | undefined;
  moves$: Observable<Move[]> | undefined;

  constructor(private databaseFacadeService: DatabaseFacadeService) {
    super();
  }

  @HostBinding('class.inactive') get inactive() {
    return !this.pokemon?.isOwned;
  }

  ngOnInit(): void {
    this.initPokemonAttributes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initPokemonAttributes();
  }

  initPokemonAttributes(): void {
    if (this.pokemon) {
      this.natureClass = this.pokemon.nature
      && this.databaseFacadeService.isNature(this.pokemon.nature)
        ? this.pokemon.nature.toLowerCase()
        : '';
      this.dbpokemon$ = this.databaseFacadeService.findPokemon(this.pokemon?.name);
      this.moves$ = forkJoin(this.pokemon.moves.map(move => {
        return this.databaseFacadeService.findMove(move);
      }));

      this.isEggMove$ = forkJoin(this.pokemon.moves.map(move => {
        return this.pokemon ? this.databaseFacadeService.isEggMove(this.pokemon.name, move) : of(false);
      }));
    }
  }

}
