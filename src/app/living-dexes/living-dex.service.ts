import { Injectable } from '@angular/core';
import { httpResource } from "@angular/common/http";
import { LivingDex } from "./living-dex.type";

@Injectable({
  providedIn: 'root'
})
export class LivingDexService {

  getHomeDex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-home.json')
  }

  getSVDex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-sv-with-dlcs.json')
  }

  getSWSHDex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-swsh-with-dlcs.json')
  }

  getUSUMDex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-usum.json')
  }

  getBDSPDex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-bdsp.json')
  }

  getLADex() {
    return httpResource<LivingDex[]>('assets/database/living-dex-la.json')
  }

}
