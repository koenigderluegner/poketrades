import { Component, computed, inject, input, signal, Signal } from '@angular/core';
import { ItemComponent } from "../icon/item/item.component";
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";
import { LivingDexService } from "./living-dex.service";
import { PokemonComponent } from "../icon/pokemon/pokemon.component";
import { LivingDex } from "./living-dex.type";
import { HttpResourceRef } from "@angular/common/http";
import { MatTooltip } from "@angular/material/tooltip";
import { SpreadsheetFacade } from "@spreadsheet/spreadsheet.facade";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatCheckbox } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";

type CheckedLivingDexEntry = LivingDex['pokemon'][0] & {
  shiny: boolean
  regular: boolean
};

@Component({
  selector: 'app-living-dexes',
  imports: [
    ItemComponent,
    SubNaviItemComponent,
    PokemonComponent,
    MatTooltip,
    MatCheckbox,
    FormsModule
  ],
  templateUrl: './living-dexes.component.html',
  styleUrl: './living-dexes.component.scss',
  host: {
    'class': 'view'
  }
})
export class LivingDexesComponent {
  dexId = input<string>()
  livingDex = inject(LivingDexService);

  // TODO eagerly loads all requests, optimize
  dexes = new Map([
      ['home', this.livingDex.getHomeDex()],
      ['sv', this.livingDex.getSVDex()],
    ['swsh', this.livingDex.getSWSHDex()],
    ]
  )

  currentSpreadsheet = toSignal(inject(SpreadsheetFacade).getCurrentSpreadsheet$());

  readonly CHUNK_SIZE = 30;

  currentDex: Signal<HttpResourceRef<LivingDex[] | undefined> | undefined> = computed(() => {
    const key = this.dexId();
    if (!key) return;
    return this.dexes.get(key)
  })
  showOnlyUnowned = signal(false);

  filteredDex = computed(() => {

    const currentDex = this.currentDex();


    if (!this.showOnlyUnowned()) return [];
    if (!currentDex) return [];
    const currentsheet = this.currentSpreadsheet();
    const checkList = currentsheet?.livingDexChecklist ?? [];
    return (currentDex.value()?.flatMap(l => l.pokemon) ?? []).filter(p => {
      if (p.shinyLocked) return false;
      const find = checkList.find(c => c.slug === p.slug);
      return !find?.shiny
    })

  })
  chunkedDex = computed(() => {

    const currentDex = this.currentDex();

    // we dont show chunks, save compute
    if (this.showOnlyUnowned()) return [];
    if (!currentDex) return [];

    const dexes = currentDex.value();

    if (!dexes) return [];
    const currentsheet = this.currentSpreadsheet();
    const checkList = currentsheet?.livingDexChecklist ?? [];

    return [...dexes].flat().map((d: LivingDex) => {
      const chunks = d.pokemon.reduce<CheckedLivingDexEntry[][]>((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / this.CHUNK_SIZE)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []
        }
        const checkItem = checkList.find(p => p.slug === item.slug);
        resultArray[chunkIndex].push({
          ...item,
          shiny: checkItem?.shiny ?? false,
          regular: checkItem?.regular ?? false
        })

        return resultArray
      }, []);

      return {...d, pokemon: chunks}
    })


  });
}
