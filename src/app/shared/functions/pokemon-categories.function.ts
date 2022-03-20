import { Pokemon } from '@shared/interfaces/pokemon';
import { PokemonCategory } from '@shared/enums/pokemon-category.enum';

const starterDexNumbers: string[] = [
  '001', // Bulbasaur
  '002', // Ivysaur
  '003', // Venusaur
  '004', // Charmander
  '005', // Charmeleon
  '006', // Charizard
  '007', // Squirtle
  '008', // Wartortle
  '009', // Blastoise
  '152', // Chikorita
  '153', // Bayleef
  '154', // Meganium
  '155', // Cyndaquil
  '156', // Quilava
  '157', // Typhlosion
  '158', // Totodile
  '159', // Croconaw
  '160', // Feraligatr
  '252', // Treecko
  '253', // Grovyle
  '254', // Sceptile
  '255', // Torchic
  '256', // Combusken
  '257', // Blaziken
  '258', // Mudkip
  '259', // Marshtomp
  '260', // Swampert
  '387', // Turtwig
  '388', // Grotle
  '389', // Torterra
  '390', // Chimchar
  '391', // Monferno
  '392', // Infernape
  '393', // Piplup
  '394', // Prinplup
  '395', // Empoleon
  '495', // Snivy
  '496', // Servine
  '497', // Serperior
  '498', // Tepig
  '499', // Pignite
  '500', // Emboar
  '501', // Oshawott
  '502', // Dewott
  '503', // Samurott
  '650', // Chespin
  '651', // Quilladin
  '652', // Chesnaught
  '722', // Rowlet
  '723', // Datrix
  '724', // Decidueye
  '725', // Litten
  '726', // Torracat
  '727', // Incineroar
  '728', // Popplio
  '729', // Brionne
  '730', // Primarina
  '810', // Grookey
  '811', // Thwackey
  '812', // Rillaboom
  '813', // Scorbunny
  '814', // Raboot
  '815', // Cinderace
  '816', // Sobble
  '817', // Drizzile
  '818', // Inteleon
]


const pseudoLegendaryDexNumbers: string[] = [
  '147', // Dratini
  '148', // Dragonair
  '149', // Dragonite
  '246', // Larvitar
  '247', // Pupitar
  '248', // Tyranitar
  '371', // Bagon
  '372', // Shelgon
  '373', // Salamence
  '374', // Beldum
  '375', // Metang
  '376', // Metagross
  '443', // Gible
  '444', // Gabite
  '445', // Garchomp
  '633', // Deino
  '634', // Zweilos
  '635', // Hydreigon
  '704', // Goomy
  '705', // Sliggoo
  '706', // Goodra
  '782', // Jangmo-o
  '783', // Hakamo-o
  '784', // Kommo-o
  '885', // Dreepy
  '886', // Drakloak
  '887', // Dragapult
];

const fossilDexNumbers: string[] = [
  '138', // Omanyte
  '139', // Omastar
  '140', // Kabuto
  '141', // Kabutops
  '142', // Aerodactyl
  '345', // Lileep
  '346', // Cradily
  '347', // Anorith
  '348', // Armaldo
  '408', // Cranidos
  '409', // Rampados
  '410', // Shieldon
  '411', // Bastiodon
  '564', // Tirtouga
  '565', // Carracosta
  '566', // Archen
  '567', // Archeops
  '696', // Tyrunt
  '697', // Tyrantrum
  '698', // Amaura
  '699', // Aurorus
  '880', // Dracozolt
  '881', // Arctozolt
  '882', // Dracovish
  '883', // Arctovish
];

const babyDexNumbers: string[] = [
  '172', // Pichu
  '173', // Cleffa
  '174', // Igglybuff
  '175', // Togepi
  '236', // Tyrogue
  '238', // Smoochum
  '239', // Elekid
  '240', // Magby
  '298', // Azurill
  '360', // Wynaut
  '406', // Budew
  '433', // Chingling
  '438', // Bonsly
  '439', // Mime Jr.
  '440', // Happiny
  '446', // Munchlax
  '447', // Riolu
  '458', // Mantyke
  '848', // Toxel
];

const ultraBeastDexNumbers: string[] = [
  '793', // Nihilego
  '794', // Buzzwole
  '795', // Pheromosa
  '796', // Xurkitree
  '797', // Celesteela
  '798', // Kartana
  '799', // Guzzlord
  '803', // Poipole
  '804', // Naganadel
  '805', // Stakataka
  '806', // Blacephalon
];

const subLegendaryDexNumbers: string[] = [
  '144', // Articuno
  '145', // Zapdos
  '146', // Moltres
  '243', // Raikou
  '244', // Entei
  '243', // Suicune
  '377', // Regirock
  '378', // Regice
  '379', // Registeel
  '380', // Latias
  '381', // Latios
  '480', // Uxie
  '481', // Mesprit
  '482', // Azelf
  '485', // Heatran
  '486', // Regigigas
  '488', // Cresselia
  '638', // Cobalion
  '639', // Terrakion
  '640', // Virizion
  '641', // Tornadus
  '642', // Thundurus
  '645', // Landorus
  '772', // Type: Null
  '773', // Silvally
  '785', // Tapu Koko
  '786', // Tapu Lele
  '787', // Tapu Bulu
  '788', // Tapu Fini
  ...ultraBeastDexNumbers,
  '891', // Kubfu
  '892', // Urshifu
  '894', // Regieleki
  '895', // Regidrago
  '896', // Glastrier
  '897', // Spectrier
  '905', // Enamorus
];

const legendaryDexNumbers: string[] = [
  '150', // Mewtwo
  '249', // Lugia
  '250', // Ho-Oh
  '382', // Kyogre
  '383', // Groudon
  '384', // Rayquaza
  '483', // Dialga
  '484', // Palkia
  '487', // Giratina
  '643', // Reshiram
  '644', // Zekrom
  '646', // Kyurem
  '716', // Xerneas
  '717', // Yveltal
  '718', // Zygarde
  '789', // Cosmog
  '790', // Cosmoem
  '791', // Solgaleo
  '792', // Lunala
  '800', // Necrozma
  '888', // Zacian
  '889', // Zamazenta
  '890', // Eternatus
  '898', // Calyrex
];

const mysticalDexNumbers: string[] = [
  '151', // Mew
  '251', // Celebi
  '385', // Jirachi
  '386', // Deoxys
  '489', // Phione
  '490', // Manaphy
  '491', // Darkrai
  '492', // Shaymin
  '493', // Arceus
  '493', // Victini
  '647', // Keldeo
  '648', // Meloetta
  '649', // Genesect
  '719', // Diancie
  '720', // Hoopa
  '721', // Volcanion
  '801', // Magearna
  '802', // Marshadow
  '807', // Zeraora
  '808', // Meltan
  '809', // Melmetal
  '893', // Zarude
];

export function categoriesOf(pokemon: Pokemon | undefined | null): string[] {

  if (!pokemon) {
    return [PokemonCategory.UNCATEGORIZED];
  }

  const pokemonName = pokemon.name.toLocaleLowerCase();
  const categories: Set<string> = new Set<string>();

  if (pokemonName.endsWith('-gigantamax')) {
    categories.add(PokemonCategory.GIGANTAMAX);
  }

  if (pokemonName.endsWith('-alola')) {
    categories.add(PokemonCategory.ALOLA);
    categories.add(PokemonCategory.REGIONAL);
  } else if (pokemonName.endsWith('-hisui')) {
    categories.add(PokemonCategory.HISUI);
    categories.add(PokemonCategory.REGIONAL);
  } else if (pokemonName.endsWith('-galar')) {
    categories.add(PokemonCategory.GALAR);
    categories.add(PokemonCategory.REGIONAL);
  }


  if (pokemonName.startsWith('unown')) {
    categories.add(PokemonCategory.UNOWN);
  } else if (pokemonName.startsWith('alcremie')) {
    categories.add(PokemonCategory.ALCREMIE);
  } else if (pokemonName.startsWith('vivillon')) {
    categories.add(PokemonCategory.VIVILLON);
  }


  if (fossilDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.FOSSIL);
  } else if (babyDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.BABY);
  } else if (mysticalDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.MYSTICAL);
  } else if (legendaryDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.LEGENDARY);
  } else if (ultraBeastDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.ULTRA_BEAST);
    categories.add(PokemonCategory.SUB_LEGENDARY);
  } else if (subLegendaryDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.SUB_LEGENDARY);
  } else if (starterDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.STARTER);
  } else if (pseudoLegendaryDexNumbers.includes(pokemon.dex)) {
    categories.add(PokemonCategory.PSEUDO_LEGENDARY);
  }

  if (categories.size === 0) {
    categories.add(PokemonCategory.UNCATEGORIZED);
  }


  return Array.from(categories);

}
