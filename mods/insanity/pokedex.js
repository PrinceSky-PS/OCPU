'use strict';

/*Custom format script made for ocpu.psim.us*/

exports.BattlePokedex = {
	moltres: {
		inherit: true,
		types: ['Ice', 'Grass'],
		baseStats: {hp: 38, atk: 78, def: 45, spa: 55, spd: 35, spe: 55}, // Best: 306
	},
	articuno: {
		inherit: true,
		types: ['Normal', 'Dark'],
		baseStats: {hp: 54, atk: 80, def: 77, spa: 100, spd: 65, spe: 15}, // Best: 391
	},
	zapdos: {
		inherit: true,
		types: ['Electric', 'Rock'],
		baseStats: {hp: 75, atk: 110, def: 80, spa: 45, spd: 65, spe: 50}, // Best: 425
	},
	mewtwo: {
		inherit: true,
		types: ['Electric', 'Ground'],
		baseStats: {hp: 100, atk: 130, def: 80, spa: 60, spd: 50, spe: 40}, // Best: 460
	},
	mew: {
		inherit: true,
		types: ['Dragon', 'Electric'],
		baseStats: {hp: 73, atk: 45, def: 95, spa: 70, spd: 90, spe: 50}, // Best: 423
	},
	raikou: {
		inherit: true,
		types: ['Bug', 'Ice'],
		baseStats: {hp: 67, atk: 50, def: 60, spa: 90, spd: 100, spe: 15}, // Best: 382
	},
	entei: {
		inherit: true,
		types: ['Bug', 'Water'],
		baseStats: {hp: 90, atk: 50, def: 38, spa: 35, spd: 80, spe: 65}, // Best: 358
	},
	suicune: {
		inherit: true,
		types: ['Water', 'Flying'],
		baseStats: {hp: 55, atk: 53, def: 90, spa: 75, spd: 60, spe: 60}, // Best: 393
	},
	lugia: {
		inherit: true,
		types: ['Poison', 'Ice'],
		baseStats: {hp: 112, atk: 109, def: 117, spa: 73, spd: 119, spe: 99}, // Best: 629
	},
	hooh: {
		inherit: true,
		types: ['Fighting', 'Psychic'],
		baseStats: {hp: 36, atk: 82, def: 52, spa: 46, spd: 17, spe: 66}, // Best: 299
	},
	celebi: {
		inherit: true,
		types: ['Bug', 'Electric'],
		baseStats: {hp: 23, atk: 94, def: 1, spa: 54, spd: 89, spe: 12}, // Best: 273
	},
	regirock: {
		inherit: true,
		types: ['Poison', 'Ghost'],
		baseStats: {hp: 127, atk: 140, def: 211, spa: 255, spd: 194, spe: 81}, // Best: 1008
	},
	regice: {
		inherit: true,
		types: ['Dragon', 'Steel'],
		baseStats: {hp: 171, atk: 250, def: 177, spa: 185, spd: 129, spe: 33}, // Best: 945
	},
	registeel: {
		inherit: true,
		types: ['Electric', 'Water'],
		baseStats: {hp: 184, atk: 243, def: 218, spa: 149, spd: 71, spe: 63}, // Best: 928
	},
	latias: {
		inherit: true,
		types: ['Fairy', 'Rock'],
		baseStats: {hp: 34, atk: 255, def: 13, spa: 40, spd: 231, spe: 133}, // Best: 706
	},
	latios: {
		inherit: true,
		types: ['Normal', 'Dragon'],
		baseStats: {hp: 110, atk: 241, def: 251, spa: 149, spd: 171, spe: 188}, // Best: 1100
	},
	kyogre: {
		inhert: true,
		types: ['Dragon', 'Steel'],
		baseStats: {hp: 200, atk: 6, def: 121, spa: 1, spd: 250, spe: 11}, // Best: 589
	},
	groundon: {
		inherit: true,
		types: ['Steel', 'Grass'],
		baseStats: {hp: 49, atk: 222, def: 226, spa: 85, spd: 216, spe: 17}, // Best: 815
	},
	rayquaza: {
		inherit: true,
		types: ['Poison', 'Fire'],
		baseStats: {hp: 245, atk: 174, def: 177, spa: 81, spd: 91, spe: 223}, // Best: 991
	},
	jirachi: {
		inherit: true,
		types: ['Dark', 'Flying'],
		baseStats: {hp: 76, atk: 192, def: 141, spa: 164, spd: 88, spe: 231}, // Best: 892
	},
	deoxys: {
		inherit: true,
		types: ['Ground', 'Grass'],
		baseStats: {hp: 108, atk: 216, def: 215, spa: 163, spd: 24, spe: 137}, // Best: 863
	},
	uxie: {
		inherit: true,
		types: ['Flying', 'Steel'],
		baseStats: {hp: 169, atk: 22, def: 4, spa: 69, spd: 196, spe: 111}, // Best: 571
	},
	mespirit: {
		inherit: true,
		types: ['Poison', 'Water'],
		baseStats: {hp: 252, atk: 191, def: 33, spa: 17, spd: 241, spe: 212}, // Best: 946
	},
	azelf: {
		inherit: true,
		types: ['Ghost', 'Bug'],
		baseStats: {hp: 208, atk: 42, def: 250, spa: 36, spd: 19, spe: 58}, // Best: 613
	},
	dialga: {
		inherit: true,
		types: ['Fairy', 'Steel'],
		baseStats: {hp: 152, atk: 92, def: 70, spa: 160, spd: 177, spe: 194}, //Best: 845
	},
	palkia: {
		inherit: true,
		types: ['Steel', 'Ghost'],
		baseStats: {hp: 200, atk: 172, def: 253, spa: 9, spd: 75, spe: 122}, // Best: 831
	},
	heatran: {
		inherit: true,
		types: ['Dark', 'Bug'],
		baseStats: {hp: 197, atk: 100, def: 133, spa: 172, spd: 237, spe: 188}, // Best: 1027
	},
	regigigas: {
		inherit: true,
		types: ['Ground', 'Poison'],
		baseStats: {hp: 247, atk: 30, def: 255, spa: 188, spd: 159, spe: 255}, // Best: 1134
	},
	giratina: {
		inherit: true,
		types: ['Dragon', 'Ghost'],
		baseStats: {hp: 209, atk: 139, def: 154, spa: 198, spd: 60, spe: 26}, // Best: 786
	},
	cresselia: {
		inherit: true,
		types: ['Psychic', 'Fighting'],
		baseStats: {hp: 247, atk: 168, def: 43, spa: 233, spd: 223, spe: 142}, // Best: 1066
	},
	phione: {
		inherit: true,
		types: ['Psychic', 'Ghost'],
		baseStats: {hp: 128, atk: 187, def: 23, spa: 81, spd: 206, spe: 66}, // Best: 691
	},
	manaphy: {
		inherit: true,
		types: ['Normal', 'Psychic'],
		baseStats: {hp: 94, atk: 121, def: 203, spa: 155, spd: 202, spe: 124}, // Best: 899
	},
	darkrai: {
		inherit: true,
		types: ['Bug', 'Rock'],
		baseStats: {hp: 141, atk: 179, def: 253, spa: 204, spd: 223, spe: 148}, //Best: 1148
	},
	shaymin: {
		inherit: true,
		types: ['Poison', 'Dark'],
		baseStats: {hp: 159, atk: 87, def: 79, spa: 145, spd: 146, spe: 93}, //Best: 709
	},
	arceus: {
		inherit: true,
		types: ['Steel', 'Ice'],
		baseStats: {hp: 175, atk: 200, def: 177, spa: 121, spd: 176, spe: 114}, // Best: 963
	},
	victini: {
		inherit: true,
		types: ['Normal', 'Fairy'],
		baseStats: {hp: 166, atk: 149, def: 207, spa: 223, spd: 102, spe: 142}, // Best: 989
	},
	cobalion: {
		inherit: true,
		types: ['Rock', 'Bug'],
		baseStats: {hp: 80, atk: 205, def: 53, spa: 172, spd: 3, spe: 152}, // Best: 665
	},
	terrakion: {
		inherit: true,
		types: ['Fighting', 'Psychic'],
		baseStats: {hp: 31, atk: 148, def: 166, spa: 123, spd: 136, spe: 1}, // Best: 605
	},
	virizion: {
		inherit: true,
		types: ['Water'],
		baseStats: {hp: 176, atk: 123, def: 119, spa: 188, spd: 165, spw: 68}, // Best: 839
	},
	tornadus: {
		inherit: true,
		types: ['Bug', 'Ground'],
		baseStats: {hp: 49, atk: 239, def: 143, spa: 140, spd: 123, spe: 139}, // Best: 833
	},
	thundurus: {
		inherit: true,
		types: ['Fighting', 'Dark'],
		baseStats: {hp: 89, atk: 17, def: 52, spa: 2, spd: 72, spe: 175}, // Best: 407
	},
	reshiram: {
		inherit: true,
		types: ['Psychic', 'Water'],
		baseStats: {hp: 148, atk: 110, def: 12, spa: 90, spd: 165, spe: 87}, // Best: 612
	},
	zekrom: {
		inherit: true,
		types: ['Flying', 'Steel'],
		baseStats: {hp: 116, atk: 143, def: 235, spa: 224, spd: 241, spe: 246}, // Best: 1205
	},
	landorus: {
		inherit: true,
		types: ['Dragon', 'Fighting'],
		baseStats: {hp: 211, atk: 203, def: 196, spa: 182, spd: 70, spe: 75}, // Best: 937
	},
	kyurem: {
		inherit: true,
		types: ['Dragon', 'Bug'],
		baseStats: {hp: 14, atk: 18, def: 95, spa: 252, dps: 214, spe: 168}, // Best: 761
	},
	keldeo: {
		inherit: true,
		types: ['Fairy', 'Fire'],
		baseStats: {hp: 178, atk: 34, def: 176, spa: 148, spd: 92, spe: 196}, // Best: 824
	},
	meloetta: {
		inherit: true,
		types: ['Dragon', 'Grass'],
		baseStats: {hp: 248, atk: 164, def: 232, spa: 156, spd: 231, spe: 143}, // Best: 1177
	},
	genesect: {
		inherit: true,
		types: ['Fire', 'Ice'],
		baseStats: {hp: 190, atk: 126, def: 168, spa: 224, spd: 238, spe: 203}, //Best: 1149
	},
	xerneas: {
		inherit: true,
		types: ['Flying', 'Fire'],
		baseStats: {hp: 74, atk: 223, def: 186, spa: 293, spd: 126, spe: 180}, // Best: 1082
	},
	yveltal: {
		inherit: true,
		types: ['Grass', 'Dragon'],
		baseStats: {hp: 203, atk: 27, def: 198, spa: 87, spd: 128, spe: 4}, // Best: 647
	},
	zygarde: {
		inherit: true,
		types: ['Fighting', 'Ground'],
		baseStats: {hp: 248, atk: 86, def: 130, spa: 116, spd: 127, spe: 210}, // Best: 917
	},
	diancie: {
		inherit: true,
		types: ['Ice', 'Fighting'],
		baseStats: {hp: 166, atk: 11, def: 228, spa: 159, spd: 71, spe: 203}, // Best: 838
	},
	hoopa: {
		inherit: true,
		types: ['Ice', 'Electric'],
		baseStats: {hp: 141, atk: 112, def: 87, spa: 165, spd: 49, spe: 25}, // Best: 579
	},
	volcanion: {
		inherit: true,
		types: ['Fighting', 'Ice'],
		baseStats: {hp: 250, atk: 75, def: 142, spa: 86, spd: 53, spe: 37}, // Best: 643
	},
	typenull: {
		inherit: true,
		types: ['Ground', 'Fire'],
		baseStats: {hp: 164, atk: 27, def: 214, spa: 125, spd: 130, spe: 226}, // Best: 886
	},
	silvally: {
		inherit: true,
		types: ['Flying'],
		baseStats: {hp: 76, atk: 95, def: 163, spa: 123, spd: 194, spe: 9}, // Best: 660
	},
	tapukoko: {
		inherit: true,
		types: ['Water', 'Dark'],
		baseStats: {hp: 22, atk: 61, def: 125, spa: 154, spd: 42, spe: 230}, // Best: 634
	},
	tapulele: {
		inherit: true,
		types: ['Fairy', 'Electric'],
		bastStats: {hp: 255, atk: 70, def: 190, spa: 219, spd: 99, spe: 23}, // Best: 856
	},
	tapubulu: {
		inherit: true,
		types: ['Ghost', 'Poison'],
		baseStats: {hp: 210, atk: 224, def: 25, spa: 102, spd: 124, spe: 153}, // Best: 838
	},
	tapufini: {
		inherit: true,
		types: ['Grass', 'Fairy'],
		baseStats: {hp: 10, atk: 26, def: 142, spa: 54, spd: 35, spe: 101}, // Best: 368
	},
	cosmog: {
		inherit: true,
		types: ['Steel'],
		baseStats: {hp: 39, atk: 38, def: 202, spa: 253, spd: 230, spe: 142}, // Best: 904
	},
	cosmoem: {
		inherit: true,
		types: ['Normal', 'Fire'],
		baseStats: {hp: 213, atk: 54, def: 52, spa: 80, spd: 176, spe: 70}, // Best: 645
	},
	solgaleo: {
		inherit: true,
		types: ['Ghost', 'Fairy'],
		baseStats: {hp: 227, atk: 148, def: 149, spa: 48, spd: 51, spe: 135}, // Best: 758
	},
	lunala: {
		inherit: true,
		types: ['Bug', 'Flying'],
		baseStats: {hp: 72, atk: 130, def: 245, spa: 38, spd: 96, spe: 107}, // Best: 688
	},
	necrozma: {
		inherit: true,
		types: ['Electric', 'Bug'],
		baseStats: {hp: 95, atk: 175, def: 122, spa: 233, spd: 154, spe: 200}, // Best: 979
	},
	magearna: {
		inherit: true,
		types: ['Dark', 'Ghost'],
		baseStats: {hp: 50, atk: 20, def: 245, spa: 169, spd: 173, spe: 199}, // Best: 856
	},
	marshadow: {
		inherit: true,
		types: ['Ice', 'Poison'],
		baseStats: {hp: 147, atk: 159, def: 70, spa: 231, spd: 116, spe: 195}, // Best: 918
	},
	zeraora: {
		inherit: true,
		types: ['Normal', 'Bug'],
		baseStats: {hp: 92, atk: 78, def: 221, spa: 132, spd: 141, spe: 9}, // Best: 673
	},
};
