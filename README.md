# Festival Timetable

A lightweight, mobile-friendly festival timetable built with plain HTML, CSS, and JavaScript.

The timetable is completely data-driven. Update a single `data.js` file to change festival information, stages, days, artists, colors, and schedules—no code changes required.

## Features

- 📅 Multi-day festival support
- 🎤 Unlimited stages
- ❤️ Personal schedule by liking artists
- 💾 Schedule saved in `localStorage`
- ⚡ Conflict detection between liked artists
- 🔗 Direct links to artist lineup pages
- 📱 Mobile-friendly responsive design
- 🎨 Custom stage colors
- 📌 Sticky time column and stage headers
- 🚀 No build tools or dependencies required

## Files

```text
/
├── index.html   # Application UI and logic
└── data.js      # Festival configuration and timetable data
```

## Quick Start

1. Open `data.js`
2. Replace the example festival data with your own
3. Open `index.html` in a browser

That's it.

## Configuration

All festival data lives inside `data.js`.

### Festival Information

```javascript
const FESTIVAL = {
  name: 'My Festival',
  edition: '2026',
  url: 'https://festival.com',
  lineup_base_url: 'https://festival.com/lineup/',
  storage_key: 'festival_likes',
  day_key: 'festival_day'
};
```

### Days

```javascript
const DAYS = [
  {
    id: 'FRI',
    label: 'Friday',
    short: 'FR',
    date: '12 Jun'
  }
];
```

### Stages

```javascript
const STAGES = [
  {
    id: 'main',
    name: 'Main Stage',
    color: '#7c3aed'
  }
];
```

### Artist Links

```javascript
const SLUGS = {
  'Architects': 'architects'
};
```

## Schedule Format

```javascript
const SCHEDULE = {
  FRI: {
    main: [
      {
        a: 'Architects',
        s: '20:00',
        e: '21:00'
      }
    ]
  }
};
```

### Artist Object

| Property | Description |
|-----------|------------|
| `a` | Artist name |
| `s` | Start time |
| `e` | End time |

### Time Format

Use 24-hour format:

```javascript
{
  a: 'Headliner',
  s: '00:00',
  e: '01:00'
}
```

Times before `06:00` are automatically treated as the next day.

## Personal Schedule

Visitors can create their own timetable by clicking the ❤️ icon on an artist.

The application automatically:

- Saves selections in local storage
- Displays a personal schedule panel
- Detects overlapping performances
- Highlights conflicts

## Customization

Common CSS variables:

```css
:root {
  --bg: #0c0c0e;
  --accent: #d4f500;
  --liked: #ff3d6b;
  --time-w: 56px;
  --stage-w: 220px;
  --px-per-min: 2px;
}
```

## Notes

- Empty stages are automatically hidden for the selected day.
- Artist names can contain special characters.
- Stage colors are reused throughout the timetable and personal schedule.
- The timetable automatically scales based on the earliest and latest performance of each day.
- Everything runs entirely in the browser with no server-side components required.
