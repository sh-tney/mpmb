var iFileName = "Shitney's Pallid Elf.js";
RequiredSheetVersion(12.999);

// Define the source
SourceList.EGW={
	name : "Player's Handbook",
	abbreviation : "EGW",
	group : "Explorer's Guide to Wildemount",
	url : "",
	date : "2020/08/03"
};

RaceList["pallid elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(pallid))|((?=.*\b(elfs?|elves|elvish|elven)\b))).*$/i,
	name : "Pallid Elf",
	sortname : "Elf, Pallid",
	source : ["EGW", 24],
	plural : "Pallid Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : ["Darkvision", 60],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
	improvements : "Drow: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Pallid Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nIncisive Sense: I have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.\nBlessing of the Moonweaver: 1st level: Light cantrip; 3rd level: Sleep; 5th level: Invisibility. Both spells can be used once per long rest. Wisdom is my spellcasting ability for these.", // errata to specify once per day is long rest
	abilitySave : 5,
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Blessing of the Moonweaver (level 1)",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"sleep" : {
			name : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Blessing of the Moonweaver)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Blessing of the Moonweaver)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};