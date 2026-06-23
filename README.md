# Real Time Tracker

A real-time location tracking web application built with **Node.js**, **Express**, **Socket.io**, and **Leaflet.js**. It shows live locations of all connected users on an interactive map, updating instantly as they move.

## Features

- Live GPS location tracking using the browser Geolocation API
- Real-time updates broadcast to all connected clients via WebSockets (Socket.io)
- Interactive map powered by Leaflet.js and OpenStreetMap tiles
- Separate marker per connected user, updating positions in real time
- Automatically removes users when they disconnect

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Backend    | Node.js, Express 5, Socket.io 4 |
| Templating | EJS                         |
| Frontend   | Leaflet.js, Socket.io client |
| Maps       | OpenStreetMap               |

## Getting Started

### Prerequisite

- Node.js 18 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd real-time-tracker

# Install dependencies
npm install
```

### Run the App

```bash
node app.js
```

Then open your browser at [http://localhost:3000](http://localhost:3000).

> Allow location access when prompted by the browser.

## How It Works

1. When a user opens the app, the browser requests their GPS location.
2. `watchPosition()` continuously watches for location changes.
3. Each update is emitted to the server via `locationUpdate` Socket.io event.
4. The server re-broadcasts it as `liveLocation` to all connected clients.
5. Each client places or updates a marker on the map for every connected user.

## Project Structure

```
real-time-tracker/
├── app.js              # Express + Socket.io server
├── package.json
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js   # Client-side geolocation & map logic
└── views/
    └── index.ejs       # Main HTML template
```

## License

ISC
