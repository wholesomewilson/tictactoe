### Tech Stack

React (with create-react-app)

## Setup
1. clone the project
2. cd into project folder
3. npm install
4. npm run start
5. application will run on localhost:3000 in browser

###Game Design
1. Start by entering your names on Start Page (default names for the players are "Player 1" and "Player 2")
2. Player 1 is assigned with symbol "X"
3. Player 2 is assigned with symbol "O"
4. Players will take turns to start for each new round. (upon refreshing, the game will reset to Player 1's turn)
5. Reset Game will redirect you to the Start Page (you can change your name and score will be reset)
6. Reset Score will reset the board and scores for both players

## Development Approach - Test Driven Development
### Tech Stack
Jest and Enzymes

###Why TDD?
To be honest, it's my first project to develop with a strict TDD approach. To my surprise, i really enjoyed it a lot! Writing tests first helped me in framing the app design, cutting down redundancy and reducing debugging time. With robust and reliable tests, it builds confidence when there is an introduction of new feature or refactoring of existing codes. (and since writing tests is an important aspect of software development and a good software engineering practice, why not just write test right from the start to avoid the pain at the end?).

## App Design

### Structure
The structure of the app consists of the followings.
1. Components
2. Pages
3. Helpers
4. Utils

#### Components
1. The approach is to build "Tiny and Reusable" components as much as possible to improve code readability and maintainability.
2. The idea is to have each component perform one single function. However, there are a few instances where this is not possible due to how certain data is initialised. For these instances, I've tried my best to break the component down by componentising repeated elements and refactoring some methods as helpers.

#### Pages
1. There are two pages, "StartPage" and "GamePage"
3. StartPage will handle the player names and act as a restart point for the game
4. GamePage will handle the game logic and rendering of game-related components
5. Splitting app into different pages according to their features and functions is something i learnt during my automation experience (POM - Page Object Model). It categories actions which belongs to a particular page to a Page class. I decided to adopt this model for a better structure and separation of data flows.

#### Helpers
1. There are two helpers, "GameLogic" and "LocalStorageHelper"
2. I've moved game logic functions into helpers as they are shared by a few components and it improves readability in component files

#### Utils
1. There are two utils, "LocalStorageMock" and "Store"
2. LocalStorageMock is used by the tests
3. Store is used and shared by most of the components to facilitate react context

### Functional Components
The app is written with functional components. They require less codes, are more concise and lightweight as compared to Class Component. In my opinion, it is easier to manage states (with Hooks), to reduce side effects and bundle size as well as to test with functional components.

### Data Flow and Management
I've decided to use React context, useContext and useState to handle Players names and scores as the data is required by multiple components which are nested more than one levels deep. This will avoid "excessive passing" of data down the component tree. Additionally, i used localStorage to store and retain the names and scores if the players refresh the page accidentally.

### Game and App Logic

1. Square
- handles the rendering of 'X' or 'O' upon clicking
- has an onClick function to change the game board in the state according to its index

2. PlayerInfo
- renders the names and scores of players

3. GameStatus
- contains functions (get_winner and is_board_full) which determine the status of the game by evaluating the game board in state
- passes data to GameOver components depending on the outcome of the game
- if the game board is full, it will render GameOver with a draw caption
- if there is a winner, it will render GameOver with the winner's name

4. GameOver
- renders the outcome of the game
- if it's a draw game, clicking the Play Again button will reset the board
- if there is a winner, clicking the Play Again button will reset the board and update the score in the global state (via useContext & useState) and localStorage.

5. Field
- base unit component for Player Name input fields
- onChange, it will change the players's name in the state

6. Button
- base unit component for the start, board, play again buttons
- a generic button component which can be used with different id, text and onClick function

7. Board
- holds GameStatus, BoardSquares and BoardButtons components
- initialise the board and isXnext in state

8. BoardSquares
- holds the 9 Square components
- manages the index and next symbol for each Square

9. BoardButtons
- holds the reset game and reset score button

10. App
- uses BrowserRouter, Switch, Router to toggle between StartPage and GamePage

That's all! :)
