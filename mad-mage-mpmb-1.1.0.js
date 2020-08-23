var iFileName = "Shitney's MPMB Expansion v1.1.0";
RequiredSheetVersion(13);

// Define Sources
SourceList.CT_DM = {
	name: "CascadingTowerEra's Dungeon of the Mad Mage",
	abbreviation: "CT:DM",
	group: "Original Content by CascadingTowerEra, built on WoTC's WDDMM",
	url: "",
	date: "2020/08/02"
};
SourceList.EEGG = {
	name: "/u/Jason_CO's Easter Eggs - A Homebrewery Project",
	abbreviation: "EEGG",
	group: "Reddit User: /u/Jason_CO",
	url: "https://homebrewery.naturalcrit.com/share/rySnSiL_PH",
	date: "2020/03/02"
};
SourceList.IG_RD = {
	name: "qrolanp's Instagram Additions",
	abbreviation: "IG:RD",
	group: "Instagram User: qrolanp",
	url: "https://www.instagram.com/qrolanp/",
	date: "2020/03/02"
}

/*
	v1.1.0 Includes:
	- New Items
		- The Slugger [Dormant]

	v1.0.0 Includes:
	- Ring of Shooting Stars 
		- Updated to use 'real' spells instead of buggy overwriting of existing spells
	- Heavy Armor Master
		- Added Reminder text to save area
	- New Items
		- Soulsting [Broken]
		- Jotunnsbane Armor [Dormant]
		- Pale Winds Charm
		- Crimson Hair Charm
		- Makluan Key [Unknown Guest User]
*/

// Adding Ring of Shooting Stars spells as actual spells, so that the item doesn't bug out
SpellsList["ball lightning"] = {
	name: "Ball Lightning",
	source: ["DMG", 192],
	classes: [],
	level: 1,
	school: "Evoc",
	save: "Dex",
	time: "1 a",
	range: "120 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Conc, 1 min",
	description: "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
	descriptionFull: "You can expend 2 charges from the ring of shooting starts as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12)."
};
SpellsList["shooting stars"] = {
	name: "Shooting Stars",
	source: ["DMG", 192],
	classes: [],
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Instantaneous",
	description: "15-ft cube in range per expended charge; all crea in cubes take 5d4 Fire damage, save halves",
	descriptionFull: "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one."
};
var fixRingOfShootingStars = function() {
	var ring = MagicItemsList["ring of shooting stars"];
	delete ring.toNotesPage;
	delete ring.spellChanges;
	ring.spellcastingBonus = [{
		name: "At will",
		spells: ["dancing lights", "light"],
		selection: ["dancing lights", "light"],
		firstCol: "atwill",
		times: 2
	}, {
		name: "1 charge",
		spells: ["faerie fire"],
		selection: ["faerie fire"],
		firstCol: 1
	}, {
		name: "Ball lightning (2 chr)",
		spells: ["ball lightning"],
		selection: ["ball lightning"],
		firstCol: 2
	}, {
		name: "Shooting stars (1-3 chr)",
		spells: ["shooting stars"],
		selection: ["shooting stars"],
		firstCol: "1-3"
	}] 
}();

// Adds reminder save text for Heavy Armor Master
var heavyArmorMasterSaveTxt = function() {
	FeatsList["heavy armor master"].savetxt =  {
		text: ["Non-magical weapon damage reduced by 3"]
	}
}();

MagicItemsList["soulsting"] = {
	name: "Soulsting",
	source: ["IG_RD", ""],
	attunement: true,
	action: [["action", " (cast absorbed spell)"], ["reaction", " (absorb spell)"]],
	choices: ["Broken"],
	"broken": {
		weight: 2,
		type: "weapon (shortsword)",
		rarity: "very rare",
		description: "I have a +1 bonus to attack and damage rolls made with this magic sword. As a reaction, when a harmful spell is cast at me, I can absorb its effect, but only on myself. I can then later cast the same spell from this sword as an action. This sword can only store one spell at a time.",
		descriptionFull: "You have a +1 bonus to attack and damage rolls made with this magic sword.\n   As a reaction, when a harmful spell is cast at you, and there is no spell currently stored in the sword, you can absorb its effect, but only on yourself. For example, if a fireball spell is cast at you and your party, and you use this ability, you take no damage from the fireball, but the rest of your party does.\n   You can also use an action while holding the sword to cast whatever spell was last absorbed, allowing a new spell to be absorbed later. For example, you cast the same fireball that was absorbed earlier, including the same spell level, attack modifier, and spell save DC as the original casting.",
		weaponsAdd: ["Soulsting"],
		weaponOptions: {
			baseWeapon: "shortsword",
			regExpSearch: /^(?=.*soulsting).*$/i,
			name: "Soulsting",
			source: ["IG_RD", ""],
			modifiers: [1, 1]
		}
	}
};
MagicItemsList["jotunnsbane armor"] = { 
	name: "Jotunnsbane Armor",
	source: ["CT_DM", ""],
	type: "armor (plate)",
	rarity: "artifact",
	attunement: true,
	weight: 65,
	choices: ["Dormant"], 
	"dormant": {
		savetxt: { text: ["Non-psychic damage reduced by 3. Make a DC 16 Wis save before saving to avoid area damage, or auto-fail. Can't be moved"] },
		description: "While attuned, all incoming non-psychic damage is reduced by 3. I cannot be moved against my will. When saving to avoid area damage, I must first make a DC 16 Wis save, or automatically fail. Falling knocks me prone, and I can't swim or climb. Standing up requires a DC 10 Str save.",
		descriptionFull: "This hefty armor is comprised dense sea-iron plates and plolished steel, bound by sturdy strapping, and bolted to thick blue leather. It appears weathered, but undeniably sturdy, with inscriptions of sea monsters on it, and a heart of mysterious black ore at the center.\n   While wearing this armor, all incoming non-psychic damage is reduced by 3.\n   You cannot be moved by force against my will, for example by magic or being pushed by an external force. You still obey most laws of physics like gravity, or moving when a platform you stand on is moved.\n   When making a save to avoid area damage, you must first make a DC 16 Wis save, or be rooted in place, automatically failing the dodge save.\n   Falling automatically knocks you prone, and you can't swim or climb while wearing this armor, but you can take it off and carry it.",
		armorOptions: {
			regExpSearch: /^(?=.*jotunnsbane)(?=.*armor).*$/i,
			name: "Jotunnsbane Armor",
			source: ["CT_DM", ""],
			type: "medium",
			ac: 18,
			stealthdis: true,
			weight: 65,
			strReq: 15
		}
	}
};
MagicItemsList["weapon charm"] = { 
	name: "Weapon Charm",
	source: ["EEGG", ""],
	type: "wondrous item",
	weight: 0.05,
	allowDuplicates : true,
	choices: ["Crimson Hair", "Pale Winds"],
	"crimson hair": {
		name: "Crimson Hair Charm",
		rarity: "uncommon",
		usages : 1,
		recovery : "Trigger",
		description: "If you take damage in one round greater or equal to half your maximum health, this item gains one charge. When you hit with the attached weapon, you may spend one charge to do one extra weapon die worth of damage.",
		descriptionFull: "This charm, made of unknown reddish hair and fur, can be attached to any weapon.\n   When you take damage equal to or greater than half your maximum health, this charm gains one charge.\n   When you hit with the weapon this charm is attached to, you may expend a charge from the charge to add an additional damage die of that weapon's type to the damage roll for this attack.\n   You may only expend one charge from the charm per attack."
	},
	"pale winds": {
		name: "Pale Winds Charm",
		rarity: "rare",
		action: ["reaction", " (extend range 5ft.)"],
		description: "When you attack with the weapon this charm is attached to, you may use your reaction to extend your reach by 5 feet for that attack.",
		descriptionFull: "This charm can be attached to any weapon, enchanting it to move the air with deadly force.\n   When you attack with the weapon this charm is attached to, you may expend your reaction to extend your reach by 5 feet for that attack."
	}
};

MagicItemsList["makluan key"] = {
	name: "Makluan Key",
	source: ["CT_DM", ""],
	attunement: true,
	type: "weapon (fist)",
	rarity: "artifact",
	weight: 1,
	action: ["action", " (heal allies 2d4)"],
	savetxt: { 
		text: ["Incoming psychic damage converts to poison"],
		adv_vs : ["enchantments"] 
	},
	choices: ["Unknown Guest User"],
	"unknown guest user": {
		description: "Adds +1 to unarmed strike attack & damage rolls, with effects per hand. Incoming psychic damage is converted to poison, and I have adv. against Enchantment effects. Striking allies heals them for 2d4, up to 3 times each per long rest. Using these incurs disadv. on Sleight of Hand & Dex Crafting until long rest.",
		descriptionFull: "This strange tarot card, a Five of Rings coloured black and gold, shimmers green when held up to the light, and transforms into a set of rings for the user.\n   These rings provide a +1 bonus to attack and damage rolls for your unarmed strikes, and can also be used to heal allies in striking distance, for 2d4 per 'attack', up to three times per long rest, per ally.\n   Thoughts, the black set of rings on one hand, deal an additional 1d8 psychic damage on hit, and also deal 1d4 psychic damage to the user.\n   Prayers, the gold set of rings on one hand, deal an additional 1d4 radiant damage on hit, and also heal the user for the same amount.\n   Benefitting from any of the above effects exhausts the user, as well as granting psychic feedback to the user, saying 'Demonstrative Mode, Unknown Guest User'. This exhaustion causes the user to have disadvantage on all Sleight of Hand checks, and all Dexterity based crafting checks until the next long rest.",
		weaponsAdd: ["Thoughts", "Prayers"],
		weaponOptions: [{
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*thoughts).*$/i,
			name: "Thoughts",
			source: ["CT_DM", ""],
			description: "+1d8 psychic damage, but you take 1d4 psychic damage; Disadv. on Sleight of Hand & Dex Crafting checks until long rest",
			modifiers: [1, 1]
		}, {
			baseWeapon: "unarmed strike",
			regExpSearch: /^(?=.*prayers).*$/i,
			name: "Prayers",
			source: ["CT_DM", ""],
			description: "+1d4 radiant damage, and heal for the same amount; Disadv. on Sleight of Hand & Dex Crafting checks until long rest",
			modifiers: [1, 1]
		}]
	}
};

// Adding "spells" for The Slugger's actions
SpellsList["blowback"] = {
	name: "Blowback",
	source: ["CT_DM", ""],
	classes: [],
	level: 1,
	school: "Slugger",
	save: "Dex",
	time: "1 bns",
	range: "25 ft radius",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Instantaneous",
	description: "Crea in range take 1d8+2 fire dmg, 1d8+2 blud dmg, and knockback 10 ft, save halves + no knockback",
	descriptionFull: "Pointing the cannon straight down to fire, creatures within a 25 foot radius make a DEX save. On fail, creatures take 1d8+2 bludgeoning and 1d8+2 fire damage and are knocked back 10 feet. On success, creatures take half as much damage and are not knocked back." + AtHigherLevels + "Each additional charge consumed increases one of the damage rolls (your choice) by 1d8, and knockback distance increases by 5 feet."
};
SpellsList["blastoff"] = {
	name: "Blastoff",
	source: ["CT_DM", ""],
	classes: [],
	level: 1,
	school: "Slugger",
	save: "Dex",
	time: "1 bns",
	range: "5 ft radius",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Instantaneous",
	description: "DC 13 Athletics: travel 30 ft, w/ extra crea (Medium+: disadv); remaining crea take 3d4 fire, save halves",
	descriptionFull: "You point the cannon behind you, and make a DC 13 Athletics check. On success, you and up to one other creature of your choice fly up to 30 feet in a straight line. Taking a Medium or larger creature with you imposes disadvantage on the check. Creatures that are not flown away (including you if the check was failed) within 5 feet must make a DEX save. On fail, take 3d4 fire damage. On success, damage is halved." + AtHigherLevels + "Each additional charge consumed increases travel distance by 15 feet, and the Athletics check DC increases by 1."
};
SpellsList["fire"] = {
	name: "Fire!",
	source: ["CT_DM", ""],
	classes: [],
	level: 1,
	school: "Slugger",
	save: "Dex",
	time: "1 bns",
	range: "60 ft line",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Instantaneous",
	description: "Crea hit take 2d6+3 fire dmg & 2d6+3 blud dmg & push 5 ft OR prone, save halves + no push",
	descriptionFull: "You fire the cannon in a 60 foot long, 5 foot wide line, creatures caught in this line must make a DEX save. On fail, creatures in this line take 2d6+3 fire damage and 2d6+3 bludgeoning damage and are pushed back up to 5 feet or knocked prone (your choice). On success, creatures take half as much damage and are not pushed/knocked." + AtHigherLevels + "Each additional charge consumed increases fire damage by 1d6+1, and increases bludgeoning damage by 1d6+1."
};
MagicItemsList["the slugger"] = {
	name: "The Slugger",
	source: ["CT_DM", ""],
	attunement: true,
	type: "weapon (greatclub)",
	rarity: "artifact",
	weight: 15,
	action: [["action", "Reload (Take 1d6 fire dmg. per charge loaded)"], ["bonus", "Fire Cannon (Take 1d8 blud. dmg per charge spent)"]],
	choices: ["Dormant"],
	"dormant": {
		description: "This cannon can be used as a +2 Greatclub, which gains charges on successful hits. These charges can be loaded into the cannon as an action, taking 1d6 fire dmg per charge. While loaded, you can use a bonus action for any of its abilities in the Spells section, taking 1d8 bludgeoning dmg per charge spent.",
		descriptionFull: "This iron cannon is mounted to a crude wooden bat handle, held together with thick red rope and etched leather, and adorned with various charms of forge gods and nautical deities. \n   This functions as a +2 greatclub, and on a successful hit, the user gains a charge, up to three of which can be loaded into the cannon as an action, dealing 1d6 fire damage to the user per charge loaded.\n   While loaded, these charges can be used to fire the cannon as a bonus action, dealing 1d8 bludgeoning damage to the user per charge, in addition to their effects, which are detailed below and in the Spells page as if they were cast with a single charge, and \"higher levels\" are details for each additional charge used. These functions count as item usages rather than spells, but use your Strength spellcasting modifier for saves and attacks.\n   Blowback: Pointing the cannon straight down to fire, creatures within a 25 foot radius make a DEX save. On fail, creatures take 1d8+2 bludgeoning and 1d8+2 fire damage and are knocked back 10 feet. On success, creatures take half as much damage and are not knocked back. Each additional charge consumed increases one of the damage rolls (your choice) by 1d8, and knockback distance increases by 5 feet.\n   Blastoff: You point the cannon behind you, and make a DC 13 Athletics check. On success, you and up to one other creature of your choice fly up to 30 feet in a straight line. Taking a Medium or larger creature with you imposes disadvantage on the check. Creatures that are not flown away (including you if the check was failed) within 5 feet must make a DEX save. On fail, take 3d4 fire damage. On success, damage is halved. Each additional charge consumed increases travel distance by 15 feet, and the Athletics check DC increases by 1.\n   Fire!: You fire the cannon in a 60 foot long, 5 foot wide line, creatures caught in this line must make a DEX save. On fail, creatures in this line take 2d6+3 fire damage and 2d6+3 bludgeoning damage and are pushed back up to 5 feet or knocked prone (your choice). On success, creatures take half as much damage and are not pushed/knocked. Each additional charge consumed increases fire damage by 1d6+1, and increases bludgeoning damage by 1d6+1.",
		usages : 3,
		recovery : "Reload",
		weaponsAdd: ["The Slugger"],
		weaponOptions: [{
			baseWeapon: "greatclub",
			regExpSearch: /^(?=.*the)(?=.*slugger).*$/i,
			name: "The Slugger",
			source: ["CT_DM", ""],
			description: "Gain one charge on hit, expiring at the end of your next turn if you have not taken damage or loaded it.",
			modifiers: [2, 2]
		}],
		fixedDC : 16,
		spellcastingBonus: [{
			name: "1-3 charges",
			spells: ["blowback"],
			selection: ["blowback"],
			firstCol: "1-3"
		}, {
			name: "Blastoff (1-3 chr)",
			spells: ["blastoff"],
			selection: ["blastoff"],
			firstCol: "1-3"
		}, {
			name: "Fire! (1-3 chr)",
			spells: ["fire"],
			selection: ["fire"],
			firstCol: "1-3"
		}] 
	}
};