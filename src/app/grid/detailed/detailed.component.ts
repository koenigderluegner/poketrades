import { Component, inject, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { forkJoin, Observable, of } from 'rxjs';
import { PokemonEntry } from '../../database/models/pokemon-entry.interface';
import { Move } from '../../database/models/move.interface';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';
import { AsyncPipe } from "@angular/common";
import { ItemComponent } from "../../icon/item/item.component";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";
import { PokemonComponent } from "../../icon/pokemon/pokemon.component";
import { TypeBadgeComponent } from "@shared/components/type-badge/type-badge.component";
import { MatIcon } from "@angular/material/icon";
import { DetailedMoveComponent } from "../detailed-move/detailed-move.component";
import { Breedable } from "@shared/interfaces/breedable.interface";
import { Pokemon } from "@shared/interfaces/pokemon";

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe,
    ItemComponent,
    SlugifyPipe,
    PokemonComponent,
    TypeBadgeComponent,
    MatIcon,
    DetailedMoveComponent
  ],
  host: {
    'class': 'grid-item',
    '[class.inactive]': 'inactive',
  }
})
export class DetailedComponent extends GridBaseAppearanceDirective implements OnInit, OnChanges {

  isEggMove$: Observable<boolean[]> | undefined;
  natureClass = '';
  dbpokemon$: Observable<PokemonEntry> | undefined;
  moves$: Observable<Move[]> | undefined;
  protected readonly PokemonComponent = PokemonComponent;
  private databaseFacadeService = inject(DatabaseFacadeService);

  get inactive() {
    return !this.pokemon?.isOwned;
  }

  isPokemon(p: Breedable | Pokemon | undefined): p is Pokemon {
    return !!p && ('item' in p || 'ivs' in p || 'evs' in p || 'dynamaxLevel' in p)
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
