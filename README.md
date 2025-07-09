## MyTube 📺🎶

A YouTube‑style video player SPA built with React, Material‑UI, and Axios. Browse trending videos, search by keyword, view video details, channel info and related content.

### Table of Contents

1. [Features](#features-1)
2. [Tech Stack](#tech-stack-1)
3. [Folder Structure](#folder-structure-1)
4. [Getting Started](#getting-started-1)

   * [Prerequisites](#prerequisites-1)
   * [Installation](#installation-1)
   * [Available Scripts](#available-scripts-1)
5. [Component Overview](#component-overview-1)
6. [API Integration](#api-integration)
7. [Routing Diagram](#routing-diagram)
8. [Theming & Styles](#theming--styles)
9. [Contributing](#contributing-1)
10. [License](#license-1)

---

### Features

* **Home (Feed)** – Trending & recommended video grid
* **Search** – Live search results by keyword
* **Video Detail** – Plays video, shows title, description, statistics, and comments
* **Channel Detail** – Channel banner, subscriber count, and channel’s videos
* **Responsive Layout** – Adapts to mobile, tablet and desktop

### Tech Stack

* **Framework**: React 18 (CRA)
* **UI Library**: Material‑UI (MUI v5)
* **Styling**: @emotion/react + @emotion/styled
* **Networking**: Axios
* **Video**: react‑player
* **Routing**: React Router v6

### Folder Structure

```
MyTube/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── api/
│   │   └── youtube.js          # Axios instance & endpoint helpers
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Feed.jsx
│   │   ├── SearchFeed.jsx
│   │   ├── VideoDetail.jsx
│   │   ├── ChannelDetail.jsx
│   │   ├── VideoCard.jsx
│   │   └── ChannelCard.jsx
│   ├── App.js                  # Routes setup
│   ├── index.js                # ReactDOM mount
│   └── index.css               # Base styles & MUI overrides
├── .gitignore
├── package.json
└── README.md
```

### Getting Started

#### Prerequisites

* Node.js ≥14
* npm or yarn
* YouTube Data API key

#### Installation

```bash
git clone https://github.com/KamalSinghgeek/MyTube.git
cd MyTube
npm install
```

Create a `.env` in project root:

```bash
REACT_APP_YT_API_KEY=YOUR_YOUTUBE_DATA_API_KEY
```

#### Available Scripts

* `npm start`
  Runs the app in development mode at `http://localhost:3000/`.
* `npm run build`
  Builds for production to the `build/` directory.
* `npm test`
  Launches test runner.
* `npm run eject`
  Ejects CRA config (one‑way).

### Component Overview

| Component           | Path                               | Description                             |
| :------------------ | :--------------------------------- | :-------------------------------------- |
| `<Navbar />`        | `src/components/Navbar.jsx`        | Top app bar with search input           |
| `<Feed />`          | `src/components/Feed.jsx`          | Displays grid of videos (trending/home) |
| `<SearchFeed />`    | `src/components/SearchFeed.jsx`    | Shows search results grid               |
| `<VideoDetail />`   | `src/components/VideoDetail.jsx`   | Video player, metadata & comments       |
| `<ChannelDetail />` | `src/components/ChannelDetail.jsx` | Channel info banner & video list        |
| `<VideoCard />`     | `src/components/VideoCard.jsx`     | Single video thumbnail card             |
| `<ChannelCard />`   | `src/components/ChannelCard.jsx`   | Channel avatar & name card              |

### API Integration

All YouTube Data API calls are centralized in `src/api/youtube.js` via Axios. It exports functions like:

```js
getPopularVideos(params)
getSearchResults(query)
getVideoById(videoId)
getChannelById(channelId)
```

### Routing Diagram

```
/                   → <Feed />
/search/:searchTerm → <SearchFeed />
/video/:id          → <VideoDetail />
/channel/:id        → <ChannelDetail />
```

### Theming & Styles

* Uses MUI’s ThemeProvider by default (custom overrides in `index.css`).
* Emotion CSS‑in‑JS for component‑scoped styles.

### Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/foo`)
3. Commit (`git commit -m "Add foo"`)
4. Push & open PR

### License

MIT License.
