## OCrosser

### Background

OCrosser is a web application based on Frogger  a classic video game which was introduced by Konami in 1981. In this game the player will control a "crosser" using the keyboard.  The objective of the game is to get the highest possible score by preventing the crosser to hit obstacles. Once the crosser hit an obstacle, the game is over, a score is given and the player has to start a new game.

### Functionality & MVP

OCrosser will have those basic functionality.

- [ ] A player can start, pause, and reset the game
- [ ] A player can move the crosser up, right, or left
- [ ] The main screen of the app has moving obstacles that can hit the crosser
- [ ] Have a board that changes as the crosser traverses upwards

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

This app will consist of a single screen with game board, game controls, and nav
links to the Github, my LinkedIn, and the About modal.  Game controls will include
Start, Stop, and Reset buttons.


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jQuery` for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering of the game,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary
HTML5 Canvas elements and rendering them to the DOM.

`tile.js`: this script will handle the logic for either being an obstacle or a normal tile
when coming into contact with the crosser.  

`crosser.js`: this script will handle the logic for rendering the crosser as it moves
across the board


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and
running and installed.  Create `webpack.config.js` as well as `package.json`.  
Write a basic entry file and the bare bones of all 3 scripts outlined above.  
Learn the basics of HTML5 Canvas.

**Day 2**: Setup the board logic as well as the crosser logic.  

**Day 3**: Setup the cell obstacle logic.  Moving obstacles should be present and game should be over when obstacle come in to contact with the crosser.

**Day 4**: Implement styling and also implement game flow buttons (reset, pause, start)
