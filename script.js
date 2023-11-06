// Elements---------------------------

// Create a 9x9 grid (gridContainer) as an array of cells
const subCell = document.querySelector('subCell')
const mainGrid = document.querySelector('.main-grid')
const cells = []



//  Variables--------------------------

// Create a function (createGrid) to display the Grid-
// create 
// Create a variable (currentPlayer) to track the current player (e.g., 'X' or 'O')
// Create a function (checkWinInsubCell) to check for wins in smaller 3 by 3 grids
// Create a function (displayWinnerSymbol) to display the winning symbol on the grid
// Create a function (cellClick) this for when i click an empty cell to place a players turn


// Grid 
// Making grid in JavaScript^ in element section
// showGrid is to display the normal 9x9
// * Making a grid in JS
const width = 3 // this is both the width and height of our board
const cellCount = width * width // this variable represents the number of cells in our grid

// This function will create all of the grid cells and append them to the existing grid
function createGrid(){
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')

    cell.id = i
    // Set width and height of the div cells
    cell.style.width = `${100 / width}%`
    mainGrid.append(cell)
    cells.push(cell)

    for (let c = 0; c < 9; c++) {
      const subCell = document.createElement('div')
      subCell.innerText = c
      subCell.className = 'sub-cell' // I can apply CSS to style my sub-cells
      cell.append(subCell)
    }
  }

}



  


//  Executions-------------------------




// Check for a win condition:
// For a given cell at (row, col):
// Check the main diagonal for a win:
// If all cells on the main-diagonal contain the current player's mark, return true
// Check the anti-diagonal for a win:
// If all cells on the anti-diagonal contain the current player's mark, return true
// Check the row for a win:
// If all cells in the row contain the current player's mark, return true
// Check the column for a win:
// if all cells in the column contain the current player's mark, return true
// if current player wins, display current player's colour to the over the whole grid 
// Return false if no win condition is met

// Check for a draw condition:
// If there are no empty cells on the board, return true (it's a draw)

// Display the game board:
// Update the visual representation of the game board in your interactive framework.
// Display 'X' and 'O' marks in the appropriate cells

// Display the game result:
// Ensure the game board and outcome are visually presented to players


// when game is finished:
// move to the next random game using Math.floor(Math.random() * gridBtn.length) without going to the previous game
// do this 9 times^ and do this 1 time for the main game.


//  Events-----------------------------

// Create a cell click:
// For each cell in the game board
// Register a click event listener
// When the cell is clicked
// Trigger the cell click function to manage player moves

// Implement the visual interation:
// Define the HTML structure and apply CSS styles to present the game board and results visually via Javascript.
// Result element: An HTML element to display the game result (win, draw).

createGrid()