// Create a function (createGrid) to display my grid
// Element
const mainGrid = document.querySelector('.main-grid')

// Variables
const cells = []
const grids = []
const mainGrids = []
const width = 3
// ^I declared width to be 3 and the width is both width and height of our grid
const cellcount = width * width
// ^This represents the numbers of cells in my grid
// console.log(width)
// console.log(amountCells)
// console.log cells)
// console.log(cells)

// Execution
function createGrid() {
  for (let i = 0; i < cellcount; i++) {
    // 🔽inside the loop a new div element is created for each main cell the div assigns to the 'cell'
    const cell = document.createElement('div')
    cell.id = i
    //^The id attribute of the cell is set to the value of i, which ensures that each main cell has a unique identifier based on the loop index.
    cell.classList.add('subGrid')
    // The "subGrid" class is added to the class list of the cell element. This allows you to apply CSS styling to all main cell with this class.
    cell.style.width = `${100 / width}%`
    // ^setting the width of each main 'cell' to a percentage of the total width (controlled by the 'width' variable). This can be used to evenly distribute the main 'cell' within the grid.
    mainGrid.append(cell)
    // mainGrid suggest there a container element in my HTML which is variable i created called mainGrid targets the class created in my HTML
    cells.push(cell)
    // ive created an array and added cell into an array for later use
    // Events
    cell.addEventListener('click', checkWinInSubCell)
    // ^It listens for a click event on each main cell and calls the '' function when a click occurs.



    const gridCells = []
    // ^Inside the loop, a new array gridCells is declared to store references to the sub-cells within each main cell.
    for (let c = 0; c < 9; c++) {
      //^ Another for loop is used to create nine sub-cells within each main cell.
      const subCell = document.createElement('div')
      // subCell.innerText = c
      // The innerText of each sub-cell is set to the value of i, which is the index of the sub-cell within its main cell. 
      subCell.className = 'sub-cell'
      // A class name 'sub-cell' is added to each sub-cell, allowing you to apply CSS styling to the sub-cells.
      cell.append(subCell)
      // Each sub-cell is added as a child of its corresponding main cell. 
      gridCells.push(subCell)
    }
    grids.push(gridCells)
    // The gridCells array, containing references to the sub-cells, is added to the grids array.
  }
}
createGrid()


// Create a function (clickCell) to know when it a players turn ('X' or 'O')
const subCells = document.querySelectorAll('.sub-cell')
// All methods get stored in subCells
let cuurentPlayer = 'X'
function clickCell(evt) {
  // The function clickCell takes a parameter of event handle logic of sub-cell is clicked
  const subCell = evt.target
  // This line of code right here captures an element that triggers an event and assigns it to the variable
  if (!subCell.classList.contains('X') && !subCell.classList.contains('O')) {
    // if subCell is empty place X or O in the empty grid
    // ^ this line of code checks if X or O are in the classList of subCell if not its true
    if (cuurentPlayer === 'X') {
      // this means X has the first play of the game
      // Current player is X the classList is to manipulate them on CSS same goes for the O
      subCell.classList.add('X')
      cuurentPlayer = 'O'
    } else {
      // this else statement is saying next player turn
      subCell.classList.add('O')
      cuurentPlayer = 'X'
    }
  }
}
// Event 
for (const cell of subCells) {
  cell.addEventListener('click', clickCell)
}


// This code right here uses a loop to iterateover each element in subCells collection 
// adds event listeners on function (clickCell)


// Create a function (checkWininSubCell) to check for wins in 3x3 grid
function checkWinInSubCell(evt) {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5], //Rows wins
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],  //cols wins
    [2, 5, 8],

    [0, 4, 8],  //diagonals wins
    [2, 4, 6]
  ]
  const currentGrid = grids[evt.target.parentNode.id]
  //^ It gets the array of subCells for the current subGrid based on the parent node of the clicked element
  for (let i = 0; i < winCondition.length; i++) {
    // inside the loop we collect numbers for the current winning condiotion
    const win = winCondition[i]
    // This collects the class of each element at the specified indices in the current subGrid
    const a = currentGrid[win[0]].classList[1]
    const b = currentGrid[win[1]].classList[1]
    const c = currentGrid[win[2]].classList[1]
    // 6it assumes that classList contains 2 classes and it uses the second class (index 1) for comparison
    // 🔽then it checks if all three classes are equal and not null.
    if (a && a === b && a === c) {
      // 🔽if the condition is true it logs the winning player to the console and return the winning class
      console.log(`${a} wins the subgrid`)
      return a
    }
  }
  return null
}

//Create a function (checkWinInMainGrid) to display the winner by placing background colour using CSS getting the colour green on the 9x9 grid
function checkWinInMainGrid() {
  for (let i = 0; i < 9; i++) {
    // ^iterates through each subgrid in the main grid, there are 9 subgrids in total,indexed from 0 to 8
    const winningSymbol = checkWinInSubCell({ target: { parentNode: { className: `.subGrid${i}` } } })
    // ^it check winning symbol in the current subgrid using the function i used for subcells the result should be stored in the winningSymbol variable
    console.log(`Winner for this subgrid ${i}: ${winningSymbol}`)
    // this logs the winning symbol for subGrid
    if (winningSymbol) {
      const mainGridCells = mainGrid.querySelectorAll(`.subGrid${i}`)
      // ^This line selects all elements with the class .subGrid.. within the mainGrid it uses template literal(${i})
      // ^to insert the value of i into the selector, this is used to target a specic subGrid within the main grid
      mainGridCells.forEach(cell => {
        // its a way to iterate over each element in the array of mainGridCells,the forEach is the method that executes my provided function
        if (winningSymbol === 'X') {
          cell.style.backgroundColor = 'lightblue'
        } else if (winningSymbol === 'O') {
          cell.style.backgroundColor = 'lightcoral'
          // If there's a winner it identifies and colours all cells in the winning subgrid ('X' in light blue or 'O' in light coral).
        }
      })

    }
  }
}














