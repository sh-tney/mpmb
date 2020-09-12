var iFileName = "DAND Nomad & Siren, by Shitney.js";
RequiredSheetVersion(13);

SourceList["DAND"] = {
	name : "Dandwiki",
	abbreviation : "DAND",
	group : "Shitpost Crusaders",
	url : "https://www.dandwiki.com/wiki/",
	date : "2020/08/01"
};

ClassList["nomad"] = {
	regExpSearch : /nomad/i,
	name : "Nomad",
	source : ["DAND", ""],
	primaryAbility : "\n \u2022 Nomad: Charisma, and Wisdom or Constitution;",
	prereqs : "\n \u2022 Nomad: Wisdom 13 & Charisma 13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Wis", "Cha"],
	skills : ["\n\n" + toUni("Nomad") + ": Choose any two."],
	toolProfs : {
		primary : ["Vehicles (land)"],
		secondary : []
	},
	armor : [
		[true, true, false, true],
		[true, false, false, false]
	],
	weapons : [
		[true, false],
		[true, false]
	],
	equipment : "Nomad starting equipment:\n \u2022 10 daggers & leather armor -or- a shield & studded leather armor;\n \u2022 A simple weapon;\n \u2022 A light crossbow and 20 bolts -or- a hand crossbow and 20 bolts;\n \u2022 An explorer's pack -or- an entertainer's pack.\n\n \u2022 One type of artisan's tools -or- a musical instrument.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Nomad Lifestyles", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 6,
	features : {
		"hidden tradition" : {
			name : "Hidden Tradition",
			source : [["DAND", ""]],
			minlevel : 1,
			description : desc([
				"For Traditions that require an attack roll or save DC, use your Charisma spellcasting mod."
			]),
			additional : levels.map(function (n) {
				return (n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8) + " known - Choose Feature";
			}),
			extraname : "Hidden Traditions",
			extrachoices : ["Above Common Mistakes", "Anchor Down", "Arcane Sense", "Bodily Efficiency", "Cat's Eyes", "Creation Studies", "Domestic Empathy", "Find Ally", "Fleetfooted", "Helpful", "Historical Studies", "Liquid Courage", "Master of Disguise", "Natural Sciences", "Song of the Open Road", "Tinker", "Torch-Bearer"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
			}),
			"above common mistakes" : {
				name : "Above Common Mistakes",
				source : [["DAND", ""]],
				description : desc([
                    "When I roll a 1 or 2 for a skill check, I can reroll the die and must use the new roll.",
                    "This only applies to skill checks on which I have a positive modifier of two or more."
				])
			},
			"anchor down" : {
				name : "Anchor Down",
				source : [["DAND", ""]],
				description : desc([
					"Choose a town, which I have a home in; I may change after living elsewhere for 6 months.",
					"I have advantage on all Persuasion and Deception checks while in the chosen town."
                ]),
			},
			"arcane sense" : {
				name : "Arcane Sense",
				source : [["DAND", ""]],
				description : desc([
					"I can cast Detect Magic as a ritual, without requiring any materials or components.",
					"I can cast this a number of times equal to my Wisdom modifier, per long rest."
				]),
                usages : "Wisdom modifier per ",
			    usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			    recovery : "long rest"
			},
			"bodily efficiency" : {
				name : "Bodily Efficiency",
				source : [["DAND", ""]],
				description : desc([
					"I gain the benefits of a long rest that normally takes 8 hours of sleep, in only 4 hours.",
					"In addition, I am considered semi-conscious during this rest, though I may still dream."
				])
			},
			"cat's eyes" : {
				name : "Cat's Eyes",
				source : [["DAND", ""]],
				description : desc([
					"I gain Darkvision range increases to 60 ft, or 120 ft if I already have Darkvision."
                ]),
                vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
			},
			"creation studies" : {
				name : "Creation Studies",
				source : [["DAND", ""]],
				description : desc([
					"I gain proficiency in Religion, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Creation Studies") + ": Religion, expertise if already proficient."
			},
			"domestic empathy" : {
				name : "Domestic Empathy",
				source : [["DAND", ""]],
				description : desc([
					"I can communicate and understand basic concepts with domestic animals."
				]),
				languageProfs : ["Domestic Animals"]
			},
			"find ally" : {
				name : "Find Ally",
				source : [["DAND", ""]],
				description : desc([
					"I gain a faithful dog or cat. Its Intelligence score increases to 4, and it understands me.",
					"Should my companion die, I can find a new one after one hour of searching in any town."
				])
			},
			"fleetfooted" : {
				name : "Fleetfooted",
				source : [["DAND", ""]],
				description : desc([
					"My movement speed increases by 10 ft; Standing from prone only takes 10 ft of movement."
                ]),
                speed : {
                    walk : { spd : "+10", enc : "+10" }
			    }
			},
			"helpful" : {
				name : "Helpful",
				source : [["DAND", ""]],
				description : desc([
					"When I take the Help action, I can help a separate target as a bonus action."
                ]),
                action : [["bonus action", "Help (after Help Action)"]]
			},
			"historical studies" : {
				name : "Historical Studies",
				source : [["DAND", ""]],
				description : desc([
					"I gain proficiency in History, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Historical Studies") + ": History, expertise if already proficient."
            },
            "liquid courage" : {
				name : "Liquid Courage",
				source : [["DAND", ""]],
				description : desc([
                    "As an action, I can drink alcohol to gain temporary hit points, lasting 1 hour.",
                    "These temporary hit points are equal to my Nomad level + 1d4.",
					"I can use this a number of times equal to my Wisdom modifier, per long rest."
				]),
                usages : "Wisdom modifier per ",
			    usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
                recovery : "long rest",
                action : [["action", " (with alcohol)"]],
                additional : levels.map(function (n) {
                    return n + " + 1d4 temp hp";
                })
            },
            "master of disguise" : {
				name : "Master of Disguise",
				source : [["DAND", ""]],
				description : desc([
					"I can cast Disguise Self as a ritual, without requiring any materials or components.",
					"I can cast this a number of times equal to my Wisdom modifier, per long rest."
				]),
                usages : "Wisdom modifier per ",
			    usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
                recovery : "long rest"
            },
            "natural sciences" : {
				name : "Natural Sciences",
				source : [["DAND", ""]],
				description : desc([
					"I gain proficiency in Nature, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Natural Sciences") + ": Nature, expertise if already proficient."
            },
            "song of the open road" : {
				name : "Song of the Open Road",
				source : [["DAND", ""]],
				description : desc([
                    "When traveling along a road, my party's travel speed increases by one half, rounded down.",
                    "When traveling along a road, my party's carrying capacity is doubled."
				])
            },
            "tinker" : {
				name : "Tinker",
				source : [["DAND", ""]],
				description : desc([
                    "I can spend 1 hour and 10 gp of materials to construct a Tiny device (AC 5, 1 hp).",
                    "The device ceases to function after 24 hours (unless you spend 1 hour repairing it).",
                    "I can use an action to dismantle it; and reclaim the materials used to create it.",
                    "Clockwork Toy: A tiny clockwork animal, monster, or person, which makes matching noises.",
                    "               When on the ground, it moves 5 ft in a random direction per turn.",
                    "Music Box: When opened, this music box plays a single song at a moderate volume.",
                    "               The box stops playing when the song ends or when it is closed.",
                    "Fire Starter: This device produces a small flame, used to light a torch or fire as an action.",
                ]),
                additional : levels.map(function (n) {
                    return "Up to three at a time";
                }),
                toolProfs: ["Tinker's tools"]
            },
            "torch-bearer" : {
				name : "Torch-Bearer",
				source : [["DAND", ""]],
				description : desc([
                    "Mundane light sources I hold illuminate through magical darkness up to half range.",
                    "Allied creatures within the light gain advantage against being frightened."
				])
            }
		},
		"day-job" : {
			name : "Day-Job (Choose Feature)",
			source : [["DAND", ""]],
			minlevel : 1,
            additional : levels.map(function (n) {
				return (n < 5 ? 1 : 2) + " job(s) - Choose Feature";
			}),
            extraname : "Day-Jobs",
            extrachoices : ["Apothecary", "Cook", "Painter", "Performer", "Potter", "Tailor", "Tinker", "Woodcarver"],
            extraTimes : levels.map(function (n) {
				return n < 5 ? 1 : 2;
			}),
            "apothecary" : {
                name : "Apothecary",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with Alchemist's Supplies and Medicine, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Apothecary)") + ": Medicine, expertise if already proficient.",
                toolProfs: ["Alchemist's supplies"]
            },
            "cook" : {
                name : "Cook",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with Cook's utensils and Survival, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Cook)") + ": Survival, expertise if already proficient.",
                toolProfs: ["Cook's utensils"]
            },
            "painter" : {
                name : "Painter",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with Painter's supplies and Perception, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Painter)") + ": Perception, expertise if already proficient.",
                toolProfs: ["Painter's supplies"]
            },
            "performer" : {
                name : "Performer",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with any musical instrument and Performance, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Performer)") + ": Performance, expertise if already proficient.",
                toolProfs: [["Musical instrument", 1]]
            },
            "potter" : {
                name : "Potter",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with Potter's tools and History, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Potter)") + ": History, expertise if already proficient.",
                toolProfs: ["Potter's tools"]
            },
            "tailor" : {
                name : "Tailor",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with weaver's tools and Persuasion, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Tailor)") + ": Persuasion, expertise if already proficient.",
                toolProfs: ["Weaver's tools"]
            },
            "tinker" : {
                name : "Tinker",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with tinker's tools and Investigation, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Tinker)") + ": Investigation, expertise if already proficient.",
                toolProfs: ["Tinker's tools"]
            },
            "woodcarver" : {
                name : "Woodcarver",
                source : [["DAND", ""]],
                description : desc([
					"I gain proficiency with woodcarver's tools and Sleight of Hand, or expertise if already proficient."
				]),
                skillstxt : "\n\n" + toUni("Day-Job (Woodcarver)") + ": Sleight of Hand, expertise if already proficient.",
                toolProfs: ["Woodcarver's tools"]
            }
		},
		"weaselly fighter" : {
			name : "Weaselly Fighter",
			source : [["DAND", ""]],
			minlevel : 1,
            description : "\n   When I make a melee attack against a target, I may use a bonus action to Disengage.",
            action : [["bonus", "Disengage (after melee attack)"]]
		},
		"treasures" : {
			name : "Treasures",
			source : [["DAND", ""]],
			minlevel : 2,
			description : desc([
                "If a Treasure leaves my possession for more than 24 hours, it loses its magic.",
                "If I then find that Treasure again, it regains its magic after another 24 hours.",
                "If lost for two or more days, I roll a d6 per long rest; On a six, I find a replacement.",
			]),
			additional : levels.map(function (n) {
				return (n < 2 ? 0 : n < 5 ? 1 : n < 8 ? 2 : n < 11 ? 3 : n < 14 ? 4 : n < 17 ? 5 : 6) + " found - Choose Feature";
			}),
			extraname : "Treasures",
			extrachoices : ["Amulet of Silence", "Book of Knowledge", "Boris' Lucky Coin", "Engraving Quill", "Ether Flute", "Faerie Lantern", "Fisherman's Blanket", "Goblin's Jaw", "Howling Horn", "Juggler's Batons", "Mage Hat", "Map of Truth", "Money Belt", "Moon Rock", "Reverse Torch", "Smuggler's Purse", "Spoon of the Bat"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 0 : n < 5 ? 1 : n < 8 ? 2 : n < 11 ? 3 : n < 14 ? 4 : n < 17 ? 5 : 6;
			}),
			"amulet of silence" : {
				name : "Amulet of Silence",
				source : [["DAND", ""]],
				description : desc([
                    "Nothing within a foot of this plain, silver amulet can make any noise."
                ]),
                additional : levels.map(function (n) {
                    return "0.5 lb";
                })
			},
			"book of knowledge" : {
				name : "Book of Knowledge",
				source : [["DAND", ""]],
				description : desc([
                    "I learn one additional hidden tradition of my choice from the Nomad's Hidden Traditions list.",
                ]),
                additional : levels.map(function (n) {
                    return "2 lb";
                })
			},
			"boris' lucky coin" : {
				name : "Boris' Lucky Coin",
				source : [["DAND", ""]],
				description : desc([
                    "While wearing this featureless copper necklace, at the start of my turn I roll a d100.",
                    "On a 99 or 100, I negate all damage dealt to me until the start of my next turn."
                ]),
                additional : levels.map(function (n) {
                    return "0.25 lb";
                })
			},
			"engraving quill" : {
				name : "Engraving Quill",
				source : [["DAND", ""]],
				description : desc([
                    "This quill engraves wood, stone, and similar materials as if it were writing on paper.",
                    "When used on paper, this magical quill does not require ink."
                ]),
                additional : levels.map(function (n) {
                    return "0.25 lb";
                })
			},
			"ether flute" : {
				name : "Ether Flute",
				source : [["DAND", ""]],
				description : desc([
                    "As an action, play this flute and have all undead within 30 ft make a Wisdom saving throw.",
                    "The save DC is equal to my spell save DC. Undead in combat have advantage on this save.",
                    "On a fail, movements and actions are stopped, until the music stops or they are damaged."
                ]),
                additional : levels.map(function (n) {
                    return "1 lb";
                })
			},
			"faerie lantern" : {
				name : "Faerie Lantern",
				source : [["DAND", ""]],
				description : desc([
                    "Inside this lantern is an invisible spriteling. It can't make noise or affect the lantern.",
                    "It can cause the lantern to glow any color with an intensity of a candle, to a campfire.",
                    "The sprite understands Common, Elven, and Sylvan. The sprite is friendly to you."
                ]),
                additional : levels.map(function (n) {
                    return "2 lb";
                })
			},
			"fisherman's blanket" : {
				name : "Fisherman's Blanket",
				source : [["DAND", ""]],
				description : desc([
                    "This blanket will dry with a single shake, regardless of how wet it is, and is always warm.",
                    "Anyone who has this blanket around their body is immune to the effects of cold weather."
                ]),
                additional : levels.map(function (n) {
                    return "5 lb";
                })
			},
			"goblin's jaw" : {
				name : "Goblin's Jaw",
				source : [["DAND", ""]],
				description : desc([
                    "This jaw allows me to cast Speak with Dead spell when placed in a dead creature's jaw.", 
                    "The spell is cast using no material components, and can be done once per dawn."
                ]),
                additional : levels.map(function (n) {
                    return "1 lb";
                })
            },
			"howling horn" : {
				name : "Howling Horn",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus equal to my Charisma modifier to Animal Handling against wolves and dogs.",
                    "It can make a convincing wolf's howl, calling all wolves and dogs within earshot to me.",
                    "They are not charmed, and might very well eat you when they show up."
                ]),
                additional : levels.map(function (n) {
                    return "2 lb";
                })
			},
			"juggler's batons" : {
				name : "Juggler's Batons",
				source : [["DAND", ""]],
				description : desc([
                    "These batons always make their way back to the thrower's hand before hitting the ground.",
                    "You gain a bonus equal to your Wisdom modifier on Performance checks with these batons."
                ]),
                additional : levels.map(function (n) {
                    return "6 lb";
                })
			},
			"mage hat" : {
				name : "Mage Hat",
				source : [["DAND", ""]],
				description : desc([
                    "This pointy magical hat enhances your attacks, while making you look like a wizard.",
                    "You may deal an additional 2 fire, cold, or lightning damage on your damage rolls."
                ]),
                additional : levels.map(function (n) {
                    return "0.5 lb";
                })
			},
			"map of truth" : {
				name : "Map of Truth",
				source : [["DAND", ""]],
				description : desc([
                    "The user of this map can recall an event from the last 10 days perfectly, over 10 minutes.",
                    "The user of this map can replay an event from within 30 ft, from the last minute, as an action.",
                    "The map regains its use of both effects at dawn."
                ]),
                additional : levels.map(function (n) {
                    return "0.25 lb";
                })
			},
			"money belt" : {
				name : "Money Belt",
				source : [["DAND", ""]],
				description : desc([
                    "This thin, leather belt has a spot for one coin purse to be tied to.",
                    "Once per dawn, this belt can magically convert up to 10 silver coins into gold coins."
                ]),
                additional : levels.map(function (n) {
                    return "1 lb";
                })
			},
			"moon rock" : {
				name : "Moon Rock",
				source : [["DAND", ""]],
				description : desc([
                    "This yellow-grey rock emits an enormous magical presence of an unknown school of magic.",
                    "Anything within 10 ft of the rock is indistinguishable via Divination spells, such as Scry.",
                    "Anyone using Detect Magic within 30 ft only detect the rock's overwhelming presence."
                ]),
                additional : levels.map(function (n) {
                    return "3 lb";
                })
			},
			"reverse torch" : {
				name : "Reverse Torch",
				source : [["DAND", ""]],
				description : desc([
                    "This torch emits 15 ft of darkness, overpowering dim light, but overpowered by bright light."
                ]),
                additional : levels.map(function (n) {
                    return "1 lb";
                })
			},
			"smuggler's purse" : {
				name : "Smuggler's Purse",
				source : [["DAND", ""]],
				description : desc([
                    "A simple coin purse, which holds any amount of a coin, but will always look and feel empty."
                ]),
                additional : levels.map(function (n) {
                    return "2 lb";
                })
			},
			"spoon of the bat" : {
				name : "Spoon of the Bat",
				source : [["DAND", ""]],
				description : desc([
                    "If this thin metal spoon is tapped against something hard, it rings out a loud, sharp tone.",
                    "During the tone, the spoon gives the wielder blindsight out to 20 ft while holding."
                ]),
                additional : levels.map(function (n) {
                    return "0.5 lb";
                })
			}
		},
		"subclassfeature3" : {
			name : "Nomad Lifestyle",
			source : [["DAND", ""]],
			minlevel : 3,
			description : desc([
				'Choose a Nomad Lifestyle you commit to and put it in the "Class" field.'
			])
		},
		"survivalist": {
			name : "Survivalist",
			source : [["DAND", ""]],
			minlevel : 6,
			description : desc([
				"I gain a bonus to the selected saving throw, equal to my Wisdom modifier (min 1).",
				"I can change the selected ability score at the end of a long rest."
			]),
			additional : levels.map(function (n) {
				return "Choose Feature";
			}),
			choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
			"strength" : {
				addMod : [{
					type : "save", field : "Str", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Strength saving throws"
				}],
				name : "Survivalist: Strength",
				source : [["DAND", ""]],
				description : desc([
					"I have a bonus to Strength saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			},
			"dexterity" : {
				addMod : [{
					type : "save", field : "Dex", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Dexerity saving throws"
				}],
				name : "Survivalist: Dexterity",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus to Dexterity saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			},
			"constitution" : {
				addMod : [{
					type : "save", field : "Con", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Constitution saving throws"
				}],
				name : "Survivalist: Constitution",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus to Constitution saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			},
			"intelligence" : {
				addMod : [{
					type : "save", field : "Int", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Intelligence saving throws"
				}],
				name : "Survivalist: Intelligence",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus to Intelligence saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			},
			"wisdom" : {
				addMod : [{
					type : "save", field : "Wis", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Wisdom saving throws"
				}],
				name : "Survivalist: Wisdom",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus to Wisdom saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			},
			"charisma" : {
				addMod : [{
					type : "save", field : "Cha", mod : "max(Wis|1)",
					text : "I add my Wisdom modifier (min 1) to my Charisma saving throws"
				}],
				name : "Survivalist: Charisma",
				source : [["DAND", ""]],
				description : desc([
                    "I have a bonus to Charisma saving throws equal to my Wisdom modifier (min 1).",
					"I can change the selected ability score at the end of a long rest."
                ])
			}
		},
		"evasion" : {
			name : "Evasion",
			source : ["DAND", ""],
			minlevel : 9,
			description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure.",
			savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
		},
		"keen of mind" : {
			name : "Keen of Mind",
			source : [["DAND", ""]],
			minlevel : 11,
            description : "\n   As an action, I can end one effect on myself causing me to be charmed or frightened.",
            action : [["action", ""]]
		},
		"primordial lullaby" : {
			name : "Primordial Lullaby",
			source : [["DAND", ""]],
			minlevel : 13,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"I and any creatures nearby native to the Material Plane, may hum this tune for one minute.",
				"All creatures who participate in this for the full minute gain the effects of a short rest.",
				"You may only use this feature once per long rest."
			])
		},
		"realized destiny" : {
			name : "Realized Destiny",
			source : [["DAND", ""]],
			minlevel : 14,
			description : desc([
				"Choose one of the paths from the \"Choose Feature\" button above."
			]),
			additional : levels.map(function (n) {
				return "Choose Feature";
			}),
			choices : ["The Crier", "The Shepherd"],
			"the crier" : {
				name : "The Crier",
				source : [["DAND", ""]],
				action: ["action", "Primordial Cry"],
				description : desc([
					"As an action, I can force creatures of my choice within 30 ft to make a Wisdom save.",
					"Creatures that fail this save are charmed or frightened (my choice) for one minute.",
					"They can make a Wisdom save at the end of their turn, ending the effect on success.",
					"All saves are against my Spellcasting save DC; This can be done once per short/long rest."
                ])
			},
			"the shepherd" : {
				name : "The Shepherd",
				source : [["DAND", ""]],
				description : desc([
					"I am unable to be detected by any form of Divination magic.",
					"Also, creatures with an Intelligence score lower than 6 will not attack me unprovoked."
                ])
			}
		},
		"scary adaptable" : {
			name : "Scary Adaptable",
			source : [["DAND", ""]],
			minlevel : 17,
			description : desc([
				"Choose one of the paths from the \"Choose Feature\" button above."
			]),
			additional : levels.map(function (n) {
				return "Choose Feature";
			}),
			choices : ["The Warrior", "The Cutpurse", "The Scholar"],
			"the warrior" : {
				name : "The Warrior",
				source : [["DAND", ""]],
				weapons : [false, true],
				description : desc([
					"I gain proficiency with martial weapons, and +1 to weapon attack and damage rolls.",
					"I can choose a different path at the end of a long rest."
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (!v.isSpell) 
							{
								output.extraHit += 1;
								output.extraDmg += 1;
							}
						},
						"My weapons attacks get +1 bonus on attack and damage rolls."
					]
				}
			},
			"the cutpurse" : {
				name : "The Cutpurse",
				source : [["DAND", ""]],
				description : desc([
					"I gain proficiency with Stealth and Sleight of Hand, or expertise if already proficient."
				]),
				skillstxt : "\n\n" + toUni("The Cutpurse") + ": Stealth & Sleight of Hand, expertise if already proficient.",
			},
			"the scholar" : {
				name : "The Scholar",
				source : [["DAND", ""]],
				description : desc([
					"I learn any two ritual spells, up to level 3rd level, and can cast them only as rituals.",
					"I can cast these spells a number of times per long rest equal to my Wisdom modifier (min 1)."
				]),
				usages : "Wisdom modifier per ",
			    usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			    recovery : "long rest",
				eval : "CurrentSpells['scholar ritual'] = { name : 'Scholar Ritual', ability : 6, list : { class : 'any', ritual : true, level : [1, 3] }, known : { spells : 2 } }; SetStringifieds('spells');",
				removeeval : "delete CurrentSpells['scholar ritual']; SetStringifieds('spells');",
			}
		},
		"horizon walker" : {
			name : "Horizon Walker",
			source : [["DAND", ""]],
			minlevel : 20,
			additional : levels.map(function (n) {
				return "Choose Feature, same as Realized Destiny";
			}),
			choices : ["The Crier", "The Shepherd"],
			"the crier" : {
				name : "The Crier",
				source : [["DAND", ""]],
				scores : [0,0,0,0,0,2],
				scoresMaximum : [0,0,0,0,0,22],
				description : desc([
					"You understand and are understood by all creatures that speak a language.",
					"I am unaffected by hunger/thirst/disease/exhaustion/aging for the first season I'm in a city.",
					"You know the Primordial Lullaby of every plane. These lullabies do not affect resting."
                ])
			},
			"the shepherd" : {
				name : "The Shepherd",
				source : [["DAND", ""]],
				scores : [0,0,0,0,2,0],
				scoresMaximum : [0,0,0,0,22,0],
				description : desc([
					"You understand and are understood by all creatures that speak a language.",
					"I am unaffected by hunger/thirst/disease/exhaustion/aging for the first season I'm in a city.",
					"You know the Primordial Lullaby of every plane. These lullabies do not affect resting."
                ])
			}
		}
	}
};

AddSubClass("nomad", "occultist", {
	regExpSearch : /^(?=.*occultist).*$/i,
    subname : "Lifestyle of the Occultist",
    fullname : "Occultist",
	source : ["DAND", ""],
	spellcastingFactor : "warlock3",
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl13
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl14
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl15
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl19
		[0, 0, 0, 4, 0, 0, 0, 0, 0]  //lvl20
	],
	spellcastingKnown : {
        cantrips : [0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : [0, 0, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7]
	},
	spellcastingList : {
        class : "druid",
        school : ["Trans", "Div"],
		level : [1, 4]
	},
	features : {
		"subclassfeature3" : {
			name : "Pact Magic",
			source : [["DAND", ""]],
			minlevel : 3,
			description : desc([
                "I can cast spells I know as a Rituals if they have the Ritual tag.",
                "I regain all spent spell slots upon completing a short rest."
			]),
			additional : levels.map(function (n, idx) {
				var cantr = [0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][idx];
                var splls = [0, 0, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7][idx];
                var gensp = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5][idx];
				return n < 3 ? "" : cantr + " cantrips, " + splls + " trans/div, " + gensp + " general spells";
            }),
            spellcastingBonus : { 
				name : "From any School",
				"class" : "druid",
				times : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5],
				level : [1, 4]
			}
		},
		"subclassfeature7" : {
			name : "Esoteric Trinkets",
			source : [["DAND", ""]],
			minlevel : 7,
			description : desc([
				"I can spend 10 minutes casting a ritual on any mundane item in my possession, imbuing it.",
                "I must cast a spell I know, with a casting time of one action or less, using a spell slot.",
                "The item is imbued, and can be used to cast the chosen spell as an action, by any creature.",
                "Once the spell is cast from the item, the item loses its magic.",
                "Only one item can be imbued at a time, increasing at 10th, 15th, and 18th level."
            ]),
            additional : levels.map(function (n, idx) {
				var ite = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4][idx];
				return n < 7 ? "" : ite + " max item(s)";
            })
		}
	}
});

RaceList["phaselocker siren"] = {
	regExpSearch : /^((?=.*(phaselocker))|((?=.*(siren)))).*$/i,
	name : "Phaselocker Siren",
	sortname : "Siren, Phaselocker",
	source : ["DAND", ""],
	plural : "Phaselocker Sirens",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", ["Any language", 1]],
	age : " typically claim adulthood around age 18 and can live to be 100 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 110 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (137 + 5d10 cm)",
	weightMetric : " weigh around 50 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Phaselocker Siren: +2 Charisma, +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Phaselocker Siren (+2 Charisma, +1 Wisdom)\nPhaselock: I can use an action to pull an enemy into a blue bubble for 1d4 turns, forcing the target to make a Strength saving throw against my Charisma spell save DC. On a failure, they are trapped, earning 1d8 psychic damage at the start of each turn it's trapped. In the bubble of energy, the creature is counted as incapacitated. I can use this ability once every long rest.",
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"phaselock" : {
			name : "Phaselock",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
};