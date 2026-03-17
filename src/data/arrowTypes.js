// ─────────────────────────────────────────────────────────────────────────────
// arrowTypes.js
//
// Primary classification: LMMC (Ward-Perkins 1940, London Museum Medieval Catalogue)
// Secondary classification: Jessop (1996)
//
// id is the site's own internal key — arbitrary, stable, never maps to any
// classification number. Classifications are plain text fields only.
//
// To add a new classification system, add a key to the `classifications` object
// on each relevant entry. No other code changes required.
//
// Lengths in the original LMMC source are given in inches; Jessop in mm.
// All lengthMin/lengthMax/widthMin/widthMax stored in mm here for consistency.
// LMMC inch values converted at 1 in = 25.4 mm (rounded to nearest mm).
// ─────────────────────────────────────────────────────────────────────────────

const arrowTypes = [

  // ── SOCKETED, Types 1–16 ───────────────────────────────────────────────────

  {
    id: 1,
    classifications: {
      lmmc: "Type 1",
      jessop: "MP3",
    },
    name: "Rounded Shoulder Socketed",
    hafting: "Socketed",
    function: "Military / Hunting",
    period: "10th–16th century",
    yearStart: 900,
    yearEnd: 1600,
    description: "Socketed arrow-heads with leaf-shaped or angular blades are fairly well dated to the earlier part of the Middle Ages, although a certain number may well be earlier as they are found in Frankish graves. In this country arrow-heads approximating to Types 1 and 2 have been found in a 12th-century context at Caesar's Camp, Folkestone and at Marlborough, from the 13th-century Rayleigh Castle, Essex and from Ragnhildsholmen, Sweden.",
    lengthMin: 50,
    lengthMax: 94,
    widthMin: null,
    widthMax: null,
    section: "Diamond or Oval",
  },

  {
    id: 2,
    classifications: {
      lmmc: "Type 2",
      jessop: "MP1",
    },
    name: "Triangular Socketed",
    hafting: "Socketed",
    function: "Military / Hunting",
    period: "11th–15th century",
    yearStart: 1000,
    yearEnd: 1500,
    description: "Socketed arrow-heads with leaf-shaped or angular blades are fairly well dated to the earlier part of the Middle Ages, although a certain number may well be earlier as they are found in Frankish graves. In this country arrow-heads approximating to Types 1 and 2 have been found in a 12th-century context at Caesar's Camp, Folkestone and at Marlborough and from the 13th-century Rayleigh Castle, Essex and from Ragnhildsholmen, Sweden.",
    lengthMin: 61,
    lengthMax: 102,
    widthMin: null,
    widthMax: null,
    section: "Diamond",
  },

  {
    id: 3,
    classifications: {
      lmmc: "Type 3",
      jessop: "MP2",
    },
    name: "Extended Socket Triangular",
    hafting: "Socketed (extended)",
    function: "Military / Hunting",
    period: "11th–14th century",
    yearStart: 1000,
    yearEnd: 1400,
    description: "Socketed arrow-heads with leaf-shaped or angular blades are fairly well dated to the earlier part of the Middle Ages, although a certain number may well be earlier as they are found in Frankish graves. Type 3 is a specialised 13th-century form from Desert Castle, Flint.",
    lengthMin: 43,
    lengthMax: 114,
    widthMin: null,
    widthMax: null,
    section: "Diamond; square in some examples",
  },

  {
    id: 4,
    classifications: {
      lmmc: "Type 4",
      jessop: "MP4",
    },
    name: "Thin Leaf Short Socket",
    hafting: "Socketed (short)",
    function: "Uncertain",
    period: "Mid-13th century",
    yearStart: 1225,
    yearEnd: 1275,
    description: "Socketed arrow-heads with leaf-shaped or angular blades are fairly well dated to the earlier part of the Middle Ages, although a certain number may well be earlier as they are found in Frankish graves. Type 4 can be paralleled at Alsnö Hus, Sweden, a site from which a few objects belong to the late 13th-century.",
    lengthMin: 60,
    lengthMax: 75,
    widthMin: null,
    widthMax: null,
    section: "Diamond",
  },

  {
    id: 5,
    classifications: {
      lmmc: "Type 5",
      jessop: "MP10",
    },
    name: "Bullet-Shaped",
    hafting: "Socketed (internal)",
    function: "Military / Crossbow",
    period: "Medieval",
    yearStart: 1200,
    yearEnd: 1600,
    description: "Bullet-shaped arrow-heads of this form were used with the cross-bow; cf. the complete arrow preserved in the British Museum. It probably represents the ultimate development of Types 7-9.",
    lengthMin: 5,
    lengthMax: 48,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 6,
    classifications: {
      lmmc: "Type 6",
      jessop: "H1",
    },
    name: "Crescent Forker",
    hafting: "Socketed (short)",
    function: "Hunting",
    period: "Late 13th century",
    yearStart: 1275,
    yearEnd: 1300,
    description: "A hunting arrow-head of uncertain, but probably medieval, date.",
    lengthMin: 30,
    lengthMax: 60,
    widthMin: 25,
    widthMax: 40,
    section: null,
  },

  {
    id: 7,
    classifications: {
      lmmc: "Type 7",
      jessop: "M7 / M8",
    },
    name: "Long Narrow Armour-Piercing",
    hafting: "Socketed",
    function: "Armour-piercing",
    period: "11th–15th century",
    yearStart: 1000,
    yearEnd: 1500,
    description: "These seem to have been developed in answer to the increasing use of defensive armour, which demanded a weapon slender enough to enter any crack, but at least sufficiently heavy to pierce cloth or leather. The transition from the earlier, bladed forms evidently took place during the 13th-century, for both sorts of arrow-head are found together on two dated military sites in this country, at Rayleigh Castle, Essex, abandoned c. 1270 and at Dyserth Castle, Flint, occupied 1241-63. The same is true of the Swedish site of Ragnhilsholmen, occupied 1275-1308 and in Scandanavia at any rate the transition seems to have been complete by the middle of the 14th-century, for types 8 and 9 were found in great quantities, almost to the exclusion of all other types, in the Mass-Graves at Visby, Gotland ( the burial-pits used after the battle of Visby in 1361. They are also the common types from the Alsnö Hus, where the majority of the finds belonged to the later 14th century, before 1390. This evidence is presumably applicable also to England. Arrow-heads of these types appear in 15th-century paintings of cross-bowmen, e.g. in two German painting of the Resurrection by Master Francke, 1424, and Hans Multscher 1437. It is possible that later in the century they were to some extent replaced by the bullet-shaped form, Type 5.",
    lengthMin: 80,
    lengthMax: 200,
    widthMin: 8,
    widthMax: 13,
    section: "Diamond",
  },

  {
    id: 8,
    classifications: {
      lmmc: "Type 8",
      jessop: "M10",
    },
    name: "Short Thin Diamond Blade",
    hafting: "Socketed (conoid)",
    function: "Armour-piercing",
    period: "Mid-12th–15th century",
    yearStart: 1150,
    yearEnd: 1500,
    description: "These seem to have been developed in answer to the increasing use of defensive armour, which demanded a weapon slender enough to enter any crack, but at least sufficiently heavy to pierce cloth or leather. The transition from the earlier, bladed forms evidently took place during the 13th-century, for both sorts of arrow-head are found together on two dated military sites in this country, at Rayleigh Castle, Essex, abandoned c. 1270 and at Dyserth Castle, Flint, occupied 1241-63. The same is true of the Swedish site of Ragnhilsholmen, occupied 1275-1308 and in Scandanavia at any rate the transition seems to have been complete by the middle of the 14th-century, for types 8 and 9 were found in great quantities, almost to the exclusion of all other types, in the Mass-Graves at Visby, Gotland ( the burial-pits used after the battle of Visby in 1361. They are also the common types from the Alsnö Hus, where the majority of the finds belonged to the later 14th century, before 1390. This evidence is presumably applicable also to England. Arrow-heads of these types appear in 15th-century paintings of cross-bowmen, e.g. in two German painting of the Resurrection by Master Francke, 1424, and Hans Multscher 1437. It is possible that later in the century they were to some extent replaced by the bullet-shaped form, Type 5.",
    lengthMin: 30,
    lengthMax: 80,
    widthMin: 8,
    widthMax: 16,
    section: "Diamond",
  },

  {
    id: 9,
    classifications: {
      lmmc: "Type 9",
      jessop: "M9",
    },
    name: "Lanceolate Biblade Thick Diamond",
    hafting: "Socketed (conoid, long)",
    function: "Armour-piercing",
    period: "Mid-13th–15th century",
    yearStart: 1250,
    yearEnd: 1500,
    description: "These seem to have been developed in answer to the increasing use of defensive armour, which demanded a weapon slender enough to enter any crack, but at least sufficiently heavy to pierce cloth or leather. The transition from the earlier, bladed forms evidently took place during the 13th-century, for both sorts of arrow-head are found together on two dated military sites in this country, at Rayleigh Castle, Essex, abandoned c. 1270 and at Dyserth Castle, Flint, occupied 1241-63. The same is true of the Swedish site of Ragnhilsholmen, occupied 1275-1308 and in Scandanavia at any rate the transition seems to have been complete by the middle of the 14th-century, for types 8 and 9 were found in great quantities, almost to the exclusion of all other types, in the Mass-Graves at Visby, Gotland ( the burial-pits used after the battle of Visby in 1361. They are also the common types from the Alsnö Hus, where the majority of the finds belonged to the later 14th century, before 1390. This evidence is presumably applicable also to England. Arrow-heads of these types appear in 15th-century paintings of cross-bowmen, e.g. in two German painting of the Resurrection by Master Francke, 1424, and Hans Multscher 1437. It is possible that later in the century they were to some extent replaced by the bullet-shaped form, Type 5.",
    lengthMin: 66,
    lengthMax: 97,
    widthMin: 10,
    widthMax: 18,
    section: "Diamond (thick)",
  },

  {
    id: 10,
    classifications: {
      lmmc: "Type 10",
      jessop: "M10",
    },
    name: "Transitional Socketed",
    hafting: "Socketed (conoid)",
    function: "Military",
    period: "13th–14th century",
    yearStart: 1200,
    yearEnd: 1400,
    description: "This form may represent the transition from Types 1-2 to Types 7-9.",
    lengthMin: 38,
    lengthMax: 43,
    widthMin: null,
    widthMax: null,
    section: "Diamond",
  },

  {
    id: 11,
    classifications: {
      lmmc: "Type 11",
      jessop: null,
    },
    name: "Specialised Type 9 Variant (i)",
    hafting: "Socketed",
    function: "Military",
    period: "14th–15th century",
    yearStart: 1300,
    yearEnd: 1500,
    description: "Types 11 and 12 are two common specialised forms of Type 9, 14th-15th century.",
    lengthMax: 79,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 12,
    classifications: {
      lmmc: "Type 12",
      jessop: null,
    },
    name: "Specialised Type 9 Variant (ii)",
    hafting: "Socketed",
    function: "Military",
    period: "14th–15th century",
    yearStart: 1300,
    yearEnd: 1500,
    description: "Types 11 and 12 are two common specialised forms of Type 9, 14th-15th century.",
    lengthMin: null,
    lengthMax: null,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 13,
    classifications: {
      lmmc: "Type 13",
      jessop: "MP7 / MP8",
    },
    name: "Barbed Socketed — Early Form",
    hafting: "Socketed",
    function: "Military / Hunting",
    period: "13th century",
    yearStart: 1200,
    yearEnd: 1300,
    description: "Barbed and socketed arrow-heads. The earliest form, Type 13, the barbs of which are short relative to the socket, was perhaps used in battle in the 13th century (see above, p. 67); but the later, more developed forms, Types 14 and 15, were exclusively designed for hunting.",
    lengthMin: 35,
    lengthMax: 60,
    widthMin: 15,
    widthMax: 30,
    section: "Oval or Diamond",
  },

  {
    id: 14,
    classifications: {
      lmmc: "Type 14",
      jessop: "H3",
    },
    name: "Flat Barb Broadhead",
    hafting: "Socketed (central)",
    function: "Hunting",
    period: "Mid-13th century",
    yearStart: 1225,
    yearEnd: 1275,
    description: "Barbed and socketed arrow-heads. The earliest form, Type 13, the barbs of which are short relative to the socket, was perhaps used in battle in the 13th century (see above, p. 67); but the later, more developed forms, Types 14 and 15, were exclusively designed for hunting.",
    lengthMin: 50,
    lengthMax: 100,
    widthMin: 45,
    widthMax: 100,
    section: "Diamond",
  },

  {
    id: 15,
    classifications: {
      lmmc: "Type 15",
      jessop: "H4",
    },
    name: "Spine Socket Broadhead",
    hafting: "Socketed (tapering spine)",
    function: "Hunting",
    period: "14th century",
    yearStart: 1300,
    yearEnd: 1400,
    description: "Barbed and socketed arrow-heads. The earliest form, Type 13, the barbs of which are short relative to the socket, was perhaps used in battle in the 13th century (see above, p. 67); but the later, more developed forms, Types 14 and 15, were exclusively designed for hunting.",
    lengthMin: 35,
    lengthMax: 80,
    widthMin: 50,
    widthMax: 100,
    section: null,
  },

  {
    id: 16,
    classifications: {
      lmmc: "Type 16",
      jessop: "M4",
    },
    name: "Bilobate Barbed",
    hafting: "Socketed",
    function: "Military",
    period: "14th century",
    yearStart: 1300,
    yearEnd: 1400,
    description: "Barbed and socketed arrow-heads. The earliest form, Type 13, the barbs of which are short relative to the socket, was perhaps used in battle in the 13th century (see above, p. 67); but the later, more developed forms, Types 14 and 15, were exclusively designed for hunting.",
    lengthMin: 25,
    lengthMax: 40,
    widthMin: 12,
    widthMax: 20,
    section: "Diamond or Oval",
  },

  // ── TANGED, Types 17–20 ────────────────────────────────────────────────────

  {
    id: 17,
    classifications: {
      lmmc: "Type 17",
      jessop: null,
    },
    name: "Tanged Barbed — Dyserth Type",
    hafting: "Tanged",
    function: "Military / Hunting",
    period: "13th century",
    yearStart: 1200,
    yearEnd: 1300,
    description: "Tanged arrow-heads are less frequent than the socketed forms. Type 17, which occurs at Dyserth Castle, Flint, 1241–63 (Fig. 17, Nos. 10–11) is evidently contemporary with the similar socketed forms. Type 19 is rare, but occurs at Alsnö Hus, Sweden, where the majority of the material belongs to the later 14th century, before 1390. Types 18 and 20 do not appear to be archaeologically dated, but they are consistent and recurring types, which probably fall within the medieval period.",
    lengthMin: 76,
    lengthMax: 76,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 18,
    classifications: {
      lmmc: "Type 18",
      jessop: null,
    },
    name: "Tanged — Common Later Medieval (i)",
    hafting: "Tanged",
    function: "General",
    period: "Later medieval",
    yearStart: 1300,
    yearEnd: 1500,
    description: "Tanged arrow-heads are less frequent than the socketed forms. Type 17, which occurs at Dyserth Castle, Flint, 1241–63 (Fig. 17, Nos. 10–11) is evidently contemporary with the similar socketed forms. Type 19 is rare, but occurs at Alsnö Hus, Sweden, where the majority of the material belongs to the later 14th century, before 1390. Types 18 and 20 do not appear to be archaeologically dated, but they are consistent and recurring types, which probably fall within the medieval period.",
    lengthMin: 58,
    lengthMax: 58,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 19,
    classifications: {
      lmmc: "Type 19",
      jessop: null,
    },
    name: "Tanged — Rare Form",
    hafting: "Tanged",
    function: "General",
    period: "Late 14th century",
    yearStart: 1350,
    yearEnd: 1390,
    description: "Tanged arrow-heads are less frequent than the socketed forms. Type 17, which occurs at Dyserth Castle, Flint, 1241–63 (Fig. 17, Nos. 10–11) is evidently contemporary with the similar socketed forms. Type 19 is rare, but occurs at Alsnö Hus, Sweden, where the majority of the material belongs to the later 14th century, before 1390. Types 18 and 20 do not appear to be archaeologically dated, but they are consistent and recurring types, which probably fall within the medieval period.",
    lengthMin: null,
    lengthMax: null,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  {
    id: 20,
    classifications: {
      lmmc: "Type 20",
      jessop: null,
    },
    name: "Tanged — Common Later Medieval (ii)",
    hafting: "Tanged",
    function: "General",
    period: "Later medieval",
    yearStart: 1300,
    yearEnd: 1500,
    description: "Tanged arrow-heads are less frequent than the socketed forms. Type 17, which occurs at Dyserth Castle, Flint, 1241–63 (Fig. 17, Nos. 10–11) is evidently contemporary with the similar socketed forms. Type 19 is rare, but occurs at Alsnö Hus, Sweden, where the majority of the material belongs to the later 14th century, before 1390. Types 18 and 20 do not appear to be archaeologically dated, but they are consistent and recurring types, which probably fall within the medieval period.",
    lengthMin: 163,
    lengthMax: 175,
    widthMin: null,
    widthMax: null,
    section: null,
  },

  // ── HANNAN SUPPLEMENT ─────────────────────────────────────────────────────

  {
    id: 21,
    classifications: {
      lmmc: "Type 21",
      jessop: "M1 / M2 / M3",
    },
    name: "Biblade Warhead",
    hafting: "Socketed (conoid internal)",
    function: "Military",
    period: "Late 14th–15th century",
    yearStart: 1375,
    yearEnd: 1500,
    description: "Classified by Alan Hannan and their work on Tewkesbury.",
    lengthMin: 20,
    lengthMax: 45,
    widthMin: 10,
    widthMax: 20,
    section: null,
  },

];

export default arrowTypes;
