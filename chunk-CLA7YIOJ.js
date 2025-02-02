import{b as u}from"./chunk-IGW6DD2I.js";import{R as c,U as p,X as a,ba as n,k as i,l as m,u as h}from"./chunk-MZKGMKCD.js";var d=(()=>{let t=class t{constructor(){this.httpClient=n(u)}loadDatabase(){return this.db?i(this.db):this.httpClient.get("assets/database/pokemon.json").pipe(p(e=>{this.db=e}))}getPokemon(){return this.loadDatabase()}findPokemon(e){return this.loadDatabase().pipe(c(r=>{let s=r.filter(l=>l.name.toLowerCase()===e.toLowerCase());return s.length===0&&m("No pokemon found with name: "+e),i(s[0])}))}getEggGroupParents(e){return e.includes("Undiscovered")||e.includes("Ditto")?i([]):this.loadDatabase().pipe(c(r=>{let s=r.filter(l=>!l.name.toLowerCase().includes("-gigantamax")&&l.eggGroups.some(f=>e.includes(f)));return s.sort((l,f)=>l.dex===f.dex?0:l.dex<f.dex?-1:1),s.length===0&&m("No pokemon found with egg groups: "),i(s)}))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var g=(()=>{let t=class t{constructor(){this.httpClient=n(u)}loadDatabase(){return this.db?i(this.db):h({moves:this.httpClient.get("assets/database/moves.json"),eggMoves:this.httpClient.get("assets/database/egg-moves.json"),levelUpMoves:this.httpClient.get("assets/database/level-up-moves.json")}).pipe(p(e=>{this.db=e}))}findMove(e){return this.loadDatabase().pipe(c(r=>{let s=r.moves.filter(l=>l.name.toLowerCase()===e.toLowerCase());return s.length===0&&m("No move found with name: "+e),i(s[0])}))}isEggMove(e,r){return this.loadDatabase().pipe(c(s=>i(!!s?.eggMoves[e]?.includes(r))))}getEggMovesForPokemon(e){return this.loadDatabase().pipe(c(r=>i(r.eggMoves[e]?r.eggMoves[e].sort():[])))}getLevelUpMovesForPokemon(e){return this.loadDatabase().pipe(c(r=>i(r.levelUpMoves[e]?r.levelUpMoves[e].moves:[])))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var b=(()=>{let t=class t{constructor(){this.httpClient=n(u)}loadDatabase(){return this.db?i(this.db):this.httpClient.get("assets/database/breedables-legality.json").pipe(p(e=>{this.db=e}))}getList(){return this.loadDatabase()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var k=(()=>{let t=class t{constructor(){this.natures=["Adamant","Bashful","Bold","Brave","Calm","Careful","Docile","Gentle","Hasty","Impish","Jolly","Lax","Lonely","Mild","Modest","Naive","Naughty","Quiet","Quirky","Rash","Relaxed","Sassy","Serious","Timid"]}getNatures(){return this.natures}isNature(e){return this.natures.findIndex(r=>r.toLowerCase()===e.toLowerCase())!==-1}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var O=(()=>{let t=class t{constructor(){this.pokemonService=n(d),this.moveService=n(g),this.legalityService=n(b),this.naturesService=n(k)}loadDatabases(){return h({pokemon:this.pokemonService.loadDatabase(),moves:this.moveService.loadDatabase(),breedableLegality:this.legalityService.loadDatabase()})}getPokemon(){return this.pokemonService.getPokemon()}findPokemon(e){return this.pokemonService.findPokemon(e)}findMove(e){return this.moveService.findMove(e)}isEggMove(e,r){return this.moveService.isEggMove(e,r)}getBreedableLegality(){return this.legalityService.getList()}getEggGroupParents(e){return this.pokemonService.getEggGroupParents(e)}getEggMovesForPokemon(e){return this.moveService.getEggMovesForPokemon(e)}getLevelUpMovesForPokemon(e){return this.moveService.getLevelUpMovesForPokemon(e)}getMovesForPokemon(e){return h({eggMoves:this.getEggMovesForPokemon(e),levelUpMoves:this.getLevelUpMovesForPokemon(e)})}isNature(e){return this.naturesService.isNature(e)}getNatures(){return this.naturesService.getNatures()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{O as a};
