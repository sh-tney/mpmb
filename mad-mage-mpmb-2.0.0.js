var iFileName = "Shitney's MPMB Expansion v2.0.0";
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
};
SourceList.IG_JG = {
	name: "mrjamesgifford's Instagram Additions",
	abbreviation: "IG:JG",
	group: "Instagram User: mrjamesgifford",
	url: "https://www.instagram.com/mrjamesgifford/",
	date: "2020/09/06"
};

/*
	v2.0.0 Includes:
	- Ring of Shooting Stars
		- Migrated to another file, while fix in official sheet has been confirmed for v13 beta 32
	- New Items
		- Goggles of Dwarvenkin
		- Mercurial Rod
	- New Feats
		- Practiced Expert
	- Minor Changes
		- Added bullet points to the descriptions of The Slugger and Makluan Key

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
		descriptionFull: "This strange tarot card, a Five of Rings coloured black and gold, shimmers green when held up to the light, and transforms into a set of rings for the user.\n   These rings provide a +1 bonus to attack and damage rolls for your unarmed strikes, and can also be used to heal allies in striking distance, for 2d4 per 'attack', up to three times per long rest, per ally.\n  \u2022 Thoughts, the black set of rings on one hand, deal an additional 1d8 psychic damage on hit, and also deal 1d4 psychic damage to the user.\n  \u2022 Prayers, the gold set of rings on one hand, deal an additional 1d4 radiant damage on hit, and also heal the user for the same amount.\n   Benefitting from any of the above effects exhausts the user, as well as granting psychic feedback to the user, saying 'Demonstrative Mode, Unknown Guest User'. This exhaustion causes the user to have disadvantage on all Sleight of Hand checks, and all Dexterity based crafting checks until the next long rest.",
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
		descriptionFull: "This iron cannon is mounted to a crude wooden bat handle, held together with thick red rope and etched leather, and adorned with various charms of forge gods and nautical deities. \n   This functions as a +2 greatclub, and on a successful hit, the user gains a charge, up to three of which can be loaded into the cannon as an action, dealing 1d6 fire damage to the user per charge loaded.\n   While loaded, these charges can be used to fire the cannon as a bonus action, dealing 1d8 bludgeoning damage to the user per charge, in addition to their effects, which are detailed below and in the Spells page as if they were cast with a single charge, and \"higher levels\" are details for each additional charge used. These functions count as item usages rather than spells, but use your Strength spellcasting modifier for saves and attacks.\n  \u2022 Blowback: Pointing the cannon straight down to fire, creatures within a 25 foot radius make a DEX save. On fail, creatures take 1d8+2 bludgeoning and 1d8+2 fire damage and are knocked back 10 feet. On success, creatures take half as much damage and are not knocked back. Each additional charge consumed increases one of the damage rolls (your choice) by 1d8, and knockback distance increases by 5 feet.\n  \u2022 Blastoff: You point the cannon behind you, and make a DC 13 Athletics check. On success, you and up to one other creature of your choice fly up to 30 feet in a straight line. Taking a Medium or larger creature with you imposes disadvantage on the check. Creatures that are not flown away (including you if the check was failed) within 5 feet must make a DEX save. On fail, take 3d4 fire damage. On success, damage is halved. Each additional charge consumed increases travel distance by 15 feet, and the Athletics check DC increases by 1.\n  \u2022 Fire!: You fire the cannon in a 60 foot long, 5 foot wide line, creatures caught in this line must make a DEX save. On fail, creatures in this line take 2d6+3 fire damage and 2d6+3 bludgeoning damage and are pushed back up to 5 feet or knocked prone (your choice). On success, creatures take half as much damage and are not pushed/knocked. Each additional charge consumed increases fire damage by 1d6+1, and increases bludgeoning damage by 1d6+1.",
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

MagicItemsList["goggles of dwarvenkin"] = {
	name : "Goggles of Dwarvenkin",
	source : ["IG_JG", ""],
	type : "wondrous item",
	rarity : "uncommon",
	description : "While wearing these goggles, I have the Stonecunning ability, +2 to Wisdom (Perception) and Intelligence (Investigation) checks for detecting traps or hidden stonework, Darkvision (60 ft), and I know the Dwarvish language. Each day, there is a 20% chance I grow a full beard or my current beard becomes thicker.",
	descriptionFull : "The wearer sees the world in shades of amber and gold; Traps and hidden stonework in your line of sight slowly light up up around the seams.\n   Stonecunning: While wearing these goggles, whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.\n   You have a +2 to Wisdom (Perception) and Intelligence (Investigation) checks for detecting traps or hidden stonework.\n   You also gain Darkvision out to 60 ft, and you can read, write, and speak the Dwarvish language.\n   Each day at dawn, there is a 20% chance you grow a full beard or your current beard becomes visibly thicker.",
	languageProfs : ["Dwarvish"],
	vision : [["Darkvision", 60]]
};

MagicItemsList["mercurial rod"] = {
	name : "Mercurial Rod",
	source : ["CT_DM", ""],
	type : "weapon",
	rarity : "legendary",
	attunement : true,
	action: ["bonus", " (Change Form)"],
	usages : 10,
	recovery : "long rest",
	additional: "regains 7",
	description : "This weapon has 10 charges, and regains seven per long rest. When attacking with this weapon, I can expend charges to gain effects, which last 1 hour (hover over this item to see a list). While attuned, I can use a bonus action to take the form of any simple or martial weapon, except it becomes magical.",
	descriptionFull : "This mysterious rod is made of a soft and malleable metallic material, unlike any common metal. While attuned, you can use a bonus action to change its form, taking on the statistics of any non-magical simple or martial weapon, and it becomoes magical, retaining the rod's abilities.\n   This weapon can store a maximum of ten charges, and regains seven charges per long rest. When attacking, you can expend charges to apply any (up to five at once) of the following effects to this weapon for one hour:\n  \u2022 2 Charges: Add 1d4 Lightning or Cold damage (your choice) to this weapon's damage, this weapon gains reach, if it does not already have it.\n  \u2022 3 Charges: Add 1d4 Radiant, Necrotic, or Thunder damage (your choice), as well as 1d6 Bludgeoning + your Proficiency bonus to this weapon's damage.\n  \u2022 4 Charges: Add 1d6 damage of any type except Psychic (your choice) to this weapon's damage, and this weapon can be used as a ranged weapon (20ft/80ft), without requiring.\n  \u2022 5 Charges: (Expertise) When calculating your proficiency bonus for the purposes of this weapon, double your proficiency bonus.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*mercurial).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Charges: (2) +1d4 Cold/Ligh dmg, +reach; (3) +1d4 Rad/Nec/Thu, +1d6+Prof Blud dmg; (4) +1d6+2 Non-Psyc dmg, +ranged; (5) Expertise';
				}
			},
			'If I include the words "Mercurial" in a the name of a weapon, it will be treated as the magic weapon Mercurial Rod. It can expend charges to gain the following effects:\n  \u2022 2 Charges: Add 1d4 Lightning or Cold damage (your choice) to this weapon\'s damage, this weapon gains reach, if it does not already have it.\n  \u2022 3 Charges: Add 1d4 Radiant, Necrotic, or Thunder damage (your choice), as well as 1d6 Bludgeoning + your Proficiency bonus to this weapon\'s damage.\n  \u2022 4 Charges: Add 1d6 damage of any type except Psychic (your choice) to this weapon\'s damage, and this weapon can be used as a ranged weapon (20ft/80ft), without ammunition.\n  \u2022 5 Charges: (Expertise) When calculating your proficiency bonus for the purposes of this weapon, double your proficiency bonus.'
		]
	}
};