var iFileName = "Shitney_RingOfShootingStarsFix.js";
RequiredSheetVersion(13);

// Adding Ring of Shooting Stars spells as actual spells, so that the item doesn't bug out
SpellsList["ball lightning"] = {
	name: "Ball Lightning",
	source: ["D", 192],
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
	source: ["D", 192],
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
		name: "2 charges",
		spells: ["ball lightning"],
		selection: ["ball lightning"],
		firstCol: 2
	}, {
		name: "1-3 charges",
		spells: ["shooting stars"],
		selection: ["shooting stars"],
		firstCol: "1-3"
	}] 
}();