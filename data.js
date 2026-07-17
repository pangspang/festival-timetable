// ─────────────────────────────────────────────────────────────────────────────
// ZWARTE CROSS 2026 — FULL TIMETABLE DATA
// Expanded programme structure for the festival timetable app.
// ─────────────────────────────────────────────────────────────────────────────

const FESTIVAL = {
  name: 'Zwarte Cross',
  edition: '2026',
  url: 'https://www.zwartecross.nl/',
  lineup_base_url: 'https://www.zwartecross.nl/programma/',
  storage_key: 'zwartecross_liked26',
  day_key: 'zwartecross_day',
};

// ─── DAYS ────────────────────────────────────────────────────────────────────
const DAYS = [
  { id: 'THU', label: 'Donderdag', short: 'DO', date: '16 jul' },
  { id: 'FRI', label: 'Vrijdag',   short: 'VR', date: '17 jul' },
  { id: 'SAT', label: 'Zaterdag',  short: 'ZA', date: '18 jul' },
  { id: 'SUN', label: 'Zondag',    short: 'ZO', date: '19 jul' },
];

// ─── STAGES ──────────────────────────────────────────────────────────────────
const STAGES = [
  { id: 'hoofdpodium', name: 'Hoofdpodium', color: '#d4f500' },
  { id: 'theatertent', name: 'Theatertent', color: '#ff7a00' },
  { id: 'bayou', name: 'The Bayou', color: '#7c3aed' },
  { id: 'exoticana', name: 'Exoticana', color: '#06b6d4' },
  { id: 'buitenpodium', name: 'Buitenpodium Theater', color: '#ef4444' },
];

// ─── ARTIST SLUG MAP ─────────────────────────────────────────────────────────
const SLUGS = {
  'Jannes & Band': 'jannes-band',
  'Eli "Paperboy" Reed (US)': 'eli-paperboy-reed-us',
  'HENGE (UK)': 'henge-uk',
  'Victor Mids': 'victor-mids',
  'Jolink, Knol & Keizer': 'jolink-knol-keizer',
  'The Opposites': 'the-opposites',
  'Typhoon Theatershow': 'typhoon-theatershow',
  'Ernst, Bobbie en de rest': 'ernst-bobbie-en-de-rest',
  'Kaiser Chiefs (UK)': 'kaiser-chiefs-uk',
  'De Staat': 'de-staat',
  'Dolf Jansen': 'dolf-jansen',
  'The Nits': 'the-nits',
  'MocroManiac': 'mocromaniac',
  'Kraantje Pappie': 'kraantje-pappie',
  'The Scene': 'the-scene',
  'The Selecter': 'the-selecter',
  'Brihang': 'brihang',
  'Bertolf': 'bertolf',
  'Sef': 'sef',
  'Ploegendienst': 'ploegendienst',
  'Bazar Bizar': 'bazar-bizar',
  'Kraantje Pappie & De Troep': 'kraantje-pappie-de-troep',
  'Bub': 'bub',
  'Raffish': 'raffish',
  'Mister Perfect': 'mister-perfect',
  'Wende': 'wende',
  'Toetie': 'toetie',
  'Tino Martin': 'tino-martin',
  'The Good, the Bad & the Ugly': 'the-good-the-bad-the-ugly',
  'Zwart Licht': 'zwart-licht',
};

// ─── SCHEDULE ────────────────────────────────────────────────────────────────
const SCHEDULE = {
  THU: {
    hoofdpodium: [
      { a: 'Jannes & Band', s: '19:00', e: '20:00' },
      { a: 'The Opposites', s: '21:00', e: '22:00' },
      { a: 'Kaiser Chiefs (UK)', s: '23:00', e: '00:30' },
    ],
    theatertent: [
      { a: 'Ernst, Bobbie en de rest', s: '16:00', e: '16:45' },
      { a: 'Victor Mids', s: '18:30', e: '19:15' },
      { a: 'Typhoon Theatershow', s: '20:30', e: '21:15' },
    ],
    bayou: [
      { a: 'Eli "Paperboy" Reed (US)', s: '18:00', e: '19:00' },
      { a: 'HENGE (UK)', s: '20:00', e: '21:00' },
      { a: 'Jolink, Knol & Keizer', s: '22:00', e: '22:45' },
    ],
    exoticana: [
      { a: 'The Nits', s: '17:30', e: '18:15' },
      { a: 'MocroManiac', s: '19:30', e: '20:15' },
      { a: 'Brihang', s: '21:30', e: '22:15' },
    ],
    buitenpodium: [
      { a: 'De Staat', s: '15:30', e: '16:15' },
      { a: 'Dolf Jansen', s: '17:15', e: '18:00' },
      { a: 'Kraantje Pappie', s: '19:00', e: '19:45' },
    ],
  },

  FRI: {
    hoofdpodium: [
      { a: 'The Scene', s: '13:00', e: '13:45' },
      { a: 'The Selecter', s: '15:00', e: '15:45' },
      { a: 'Bertolf', s: '17:30', e: '18:15' },
      { a: 'Sef', s: '20:00', e: '20:50' },
      { a: 'Ploegendienst', s: '22:30', e: '23:30' },
    ],
    theatertent: [
      { a: 'Ernst, Bobbie en de rest', s: '14:00', e: '14:45' },
      { a: 'Bazar Bizar', s: '16:00', e: '16:45' },
      { a: 'Kraantje Pappie & De Troep', s: '18:30', e: '19:15' },
      { a: 'Bub', s: '21:00', e: '21:45' },
    ],
    bayou: [
      { a: 'Raffish', s: '12:30', e: '13:15' },
      { a: 'Mister Perfect', s: '14:30', e: '15:15' },
      { a: 'Wende', s: '16:30', e: '17:15' },
      { a: 'Toetie', s: '18:45', e: '19:30' },
    ],
    exoticana: [
      { a: 'Tino Martin', s: '13:30', e: '14:15' },
      { a: 'The Good, the Bad & the Ugly', s: '15:30', e: '16:15' },
      { a: 'Zwart Licht', s: '19:00', e: '19:45' },
    ],
    buitenpodium: [
      { a: 'Dolf Jansen', s: '12:00', e: '12:45' },
      { a: 'The Nits', s: '14:00', e: '14:45' },
      { a: 'MocroManiac', s: '16:00', e: '16:45' },
      { a: 'De Staat', s: '18:00', e: '18:45' },
    ],
  },

  SAT: {
    hoofdpodium: [
      { a: 'Jannes & Band', s: '12:30', e: '13:15' },
      { a: 'The Opposites', s: '14:30', e: '15:30' },
      { a: 'Kaiser Chiefs (UK)', s: '17:00', e: '18:00' },
      { a: 'Bertolf', s: '20:00', e: '20:50' },
      { a: 'Ploegendienst', s: '22:30', e: '23:30' },
    ],
    theatertent: [
      { a: 'Typhoon Theatershow', s: '13:00', e: '13:45' },
      { a: 'Victor Mids', s: '15:00', e: '15:45' },
      { a: 'Ernst, Bobbie en de rest', s: '17:30', e: '18:15' },
      { a: 'Bub', s: '20:30', e: '21:15' },
    ],
    bayou: [
      { a: 'Eli "Paperboy" Reed (US)', s: '12:00', e: '12:45' },
      { a: 'HENGE (UK)', s: '14:00', e: '14:50' },
      { a: 'Raffish', s: '16:30', e: '17:15' },
      { a: 'Wende', s: '19:00', e: '19:45' },
    ],
    exoticana: [
      { a: 'The Scene', s: '13:30', e: '14:15' },
      { a: 'Bazar Bizar', s: '15:30', e: '16:15' },
      { a: 'Tino Martin', s: '18:00', e: '18:45' },
    ],
    buitenpodium: [
      { a: 'Jolink, Knol & Keizer', s: '11:00', e: '11:45' },
      { a: 'Kraantje Pappie', s: '13:00', e: '13:45' },
      { a: 'The Good, the Bad & the Ugly', s: '15:00', e: '15:45' },
      { a: 'Zwart Licht', s: '17:30', e: '18:15' },
    ],
  },

  SUN: {
    hoofdpodium: [
      { a: 'The Selecter', s: '12:30', e: '13:15' },
      { a: 'De Staat', s: '14:30', e: '15:15' },
      { a: 'Sef', s: '16:30', e: '17:15' },
      { a: 'Kaiser Chiefs (UK)', s: '18:30', e: '19:30' },
      { a: 'The Opposites', s: '21:00', e: '22:00' },
    ],
    theatertent: [
      { a: 'Typhoon Theatershow', s: '12:00', e: '12:45' },
      { a: 'Ernst, Bobbie en de rest', s: '14:00', e: '14:45' },
      { a: 'Victor Mids', s: '16:00', e: '16:45' },
      { a: 'Bub', s: '18:00', e: '18:45' },
    ],
    bayou: [
      { a: 'Eli "Paperboy" Reed (US)', s: '13:00', e: '13:45' },
      { a: 'HENGE (UK)', s: '15:00', e: '15:45' },
      { a: 'Toetie', s: '17:00', e: '17:45' },
      { a: 'Mister Perfect', s: '19:00', e: '19:45' },
    ],
    exoticana: [
      { a: 'The Nits', s: '13:30', e: '14:15' },
      { a: 'MocroManiac', s: '15:30', e: '16:15' },
      { a: 'Brihang', s: '17:30', e: '18:15' },
    ],
    buitenpodium: [
      { a: 'Jolink, Knol & Keizer', s: '11:30', e: '12:15' },
      { a: 'Dolf Jansen', s: '13:30', e: '14:15' },
      { a: 'Kraantje Pappie & De Troep', s: '15:30', e: '16:15' },
      { a: 'Zwart Licht', s: '17:30', e: '18:15' },
    ],
  },
};
