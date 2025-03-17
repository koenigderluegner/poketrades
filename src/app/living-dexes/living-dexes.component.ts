import { Component, computed, inject, input, Signal } from '@angular/core';
import { GridControllerComponent } from "../grid/grid-controller/grid-controller.component";
import { ItemComponent } from "../icon/item/item.component";
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";
import { LivingDexService } from "./living-dex.service";
import { PokemonComponent } from "../icon/pokemon/pokemon.component";
import { LivingDex } from "./living-dex.type";
import { HttpResourceRef } from "@angular/common/http";

@Component({
    selector: 'app-living-dexes',
    imports: [
        GridControllerComponent,
        ItemComponent,
        SubNaviItemComponent,
        PokemonComponent
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
        ]
    )

    readonly CHUNK_SIZE = 30;

    currentDex: Signal<HttpResourceRef<LivingDex[] | undefined> | undefined> = computed(() => {
        const key = this.dexId();
        if (!key) return;
        return this.dexes.get(key)
    })

    chunkedDex = computed(() => {

        const currentDex = this.currentDex()

        if (!currentDex) return [];

        const dexes = currentDex.value();

        if (!dexes) return [];

        return [...dexes].flat().map((d: LivingDex) => {
            const chunks = d.pokemon.reduce<LivingDex['pokemon'][]>((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / this.CHUNK_SIZE)

                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = []
                }

                resultArray[chunkIndex].push(item)

                return resultArray
            }, []);

            return {...d, pokemon: chunks}
        })


    });
}
