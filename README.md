# Memory Card Game

**[Live Demo](https://memory-card-game-five-omega.vercel.app/)**

A responsive memory card game built with React. The goal is to click each Pokémon only once while remembering which cards have already been selected.

The cards shuffle after every successful selection, making it progressively harder to remember their positions.

## Features

* 🎴 12 Pokémon cards fetched from the PokéAPI
* 🧠 Memory-based gameplay
* 🔀 Cards shuffle after every successful selection
* ✨ Card flip animation when shuffling
* 🏆 Current score and best score tracking
* 🎉 Victory state when all cards are successfully selected
* 💀 Game over when selecting the same card twice
* 🔄 Play Again functionality
* 📱 Responsive layout for desktop, tablet and mobile

## Technologies

* React
* JavaScript
* HTML
* CSS
* Vite
* PokéAPI

## React Concepts Practiced

This project was built to practice several core React concepts:

* Components and component composition
* Props
* State management with `useState`
* Side effects with `useEffect`
* Rendering lists with `map()`
* Event handling
* Conditional rendering
* Working with asynchronous data
* Fetching data from an external API
* Managing state updates
* Creating reusable utility functions

## Project Structure

```text
src/
├── API/
│   └── pokemonAPI.js
├── components/
│   ├── Card.jsx
│   ├── CardGrid.jsx
│   ├── GameOver.jsx
│   └── Header.jsx
├── utils/
│   └── shuffle.js
├── App.jsx
└── App.css
```

## How to Run

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## API

Pokémon data is retrieved from [PokéAPI](https://pokeapi.co/).

The application fetches each Pokémon's name and official artwork and uses that data to build the game cards.

## Gameplay

1. Click on a Pokémon card.
2. If you haven't selected that Pokémon before, your score increases.
3. All cards flip and shuffle.
4. Try to remember which Pokémon you have already selected.
5. Selecting the same Pokémon twice ends the game.
6. Select all 12 Pokémon without repeating one to win.

## Credits

Built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.
