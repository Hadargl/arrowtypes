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
    description: "Socketed arrow-head with a leaf-shaped or angular blade and rounded shoulders. Well dated to the earlier part of the Middle Ages, though some examples may be earlier as they are also found in Frankish graves. Arrow-heads approximating this type have been found in 12th-century contexts at Caesar's Camp, Folkestone, and at Marlborough. The characteristic early-medieval military arrow-head had a broad, flat blade with a marked shoulder — a pre-conquest form which lasted into, but probably not beyond, the 13th century.",
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
    description: "Socketed arrow-head with an angular triangular blade. Found in 12th-century contexts at Marlborough and from the 13th century at Rayleigh Castle, Essex. The characteristic early-medieval military arrow-head had a broad, flat blade with a marked shoulder. Already in the 13th century the later, more compact types appeared in answer to the development of plate armour.",
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
    description: "A specialised 13th-century socketed form. Found at Rayleigh Castle, Essex, abandoned c. 1270. One recorded example has an unusually long socket of square section, length 4.5 in. Similar to Type 2 but distinguished by its extended socket.",
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
    description: "Socketed form paralleled at Alsnö Hus, Sweden, a site from which a few objects belong to the late 13th century. Thin leaf-shaped blade, diamond in cross-section, with a short socket.",
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
    description: "Bullet-shaped arrow-head used with the cross-bow; cf. the complete arrow preserved in the British Museum. It probably represents the ultimate development of Types 7–9. It is possible that later in the century these were to some extent replaced by the further refined compact forms.",
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
    description: "A hunting arrow-head of uncertain but probably medieval date. Crescent-shaped forker head with the inside of the crescent sharpened. Socketed short stem. In the later Middle Ages barbed arrow-heads were confined to the chase.",
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
    description: "Developed in answer to the increasing use of defensive armour, which demanded a weapon slender enough to enter any crack but sufficiently heavy to pierce cloth or leather. The transition from the earlier bladed forms evidently took place during the 13th century, for both sorts of arrow-head are found together on two dated military sites — Rayleigh Castle, Essex, abandoned c. 1270, and Dyserth Castle, Flint, occupied 1241–63. Very long, thin point with a diamond cross-section widening to a socketed round cross-section stem (Type 7a); or a long, narrow tapering blade with a diamond cross-section, socketed stem joining the blade smoothly or with a prominent shoulder (Type 7b).",
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
    description: "Developed in answer to the increasing use of defensive armour. Found in great quantities at the Mass-Graves at Visby, Gotland (1361), where along with Type 9 they were almost the exclusive type present. Also found at Dyserth Castle (1241–63) and Ragnhildsholmen, Sweden (1257–1308). Short thin blade with a diamond cross-section, conoid socketed stem.",
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
    description: "The most common slender armour-piercing form. Found in great quantities at the Mass-Graves at Visby, Gotland (1361) alongside Type 8, to the near exclusion of all other types. Also attested at Dyserth Castle (1241–63) and Ragnhildsholmen (1257–1308). By the middle of the 14th century these compact types were used almost exclusively. Long sharp tapering lanceolate biblade head with thick diamond cross-section, long conoid socketed stem.",
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
    description: "This form may represent the transition from Types 1–2 to Types 7–9. A short thin blade with a diamond cross-section and conoid socketed stem, intermediate in character between the broad early forms and the slender armour-piercing types that came to dominate by the 14th century.",
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
    description: "One of two common specialised forms of Type 9, dating to the 14th–15th century.",
    lengthMin: 61,
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
    description: "The second of two common specialised forms of Type 9, dating to the 14th–15th century.",
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
    description: "Barbed and socketed arrow-head. The earliest barbed socketed form, with barbs which are short relative to the socket, perhaps used in battle in the 13th century. In the later Middle Ages barbed arrow-heads were confined to the chase. Wide barbed form with variations in barb size and socket length (Type 13a); or with socketed mid-rib and flat barbs which vary in size (Type 13b). Oval or diamond cross-section.",
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
    description: "A later, more developed barbed socketed form exclusively designed for hunting. Centrally enclosed socket with two large flat barbs, diamond in cross-section. Many derivatives recorded in the catalogue.",
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
    description: "A developed barbed socketed hunting form exclusively designed for hunting. A tapering socket forms the spine of the arrowhead, with two long curving barbs. Appears in 15th-century paintings of cross-bowmen, e.g. in two German paintings of the Resurrection by Master Francke (1424) and Hans Multscher (1437).",
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
    description: "Barbed and socketed arrow-head. Small compact lanceolate bilobate head with close-fitting barbs, diamond or oval in cross-section, socketed stem. Recorded as sub-types 16a, 16b, and 16c in the LMMC catalogue entries.",
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
    description: "Tanged arrow-heads are less frequent than the socketed forms. Type 17 occurs at Dyserth Castle, Flint (1241–63) and is evidently contemporary with the similar socketed forms of that period.",
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
    description: "Tanged arrow-heads are less frequent than the socketed forms. Types 18 and 20 do not appear to be archaeologically dated but are consistent and recurring types which probably fall within the medieval period.",
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
    description: "A rare tanged form. Occurs at Alsnö Hus, Sweden, where the majority of the material belongs to the later 14th century, before 1390.",
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
    description: "Tanged arrow-heads are less frequent than the socketed forms. Types 18 and 20 do not appear to be archaeologically dated but are consistent and recurring types which probably fall within the medieval period.",
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
    description: "A type identified by Hannan from the Tewkesbury finds, not defined in Ward-Perkins (1940). Thin-walled conoid internal socket with flat biblade construction, occasionally barbed (Type 21a: lanceolate biblade); very thin narrow blades extending from a short stem to the tip (Type 21b); or with a midrib which narrows at tip and base and widens at the centre following the contour of the blades on a conoid socketed stem (Type 21c). An armour-piercing warhead form.",
    lengthMin: 20,
    lengthMax: 45,
    widthMin: 10,
    widthMax: 20,
    section: null,
  },

];

export default arrowTypes;
