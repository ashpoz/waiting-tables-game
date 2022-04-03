import Table from './Table.js';
import Game from './Game.js';

const game = Game;


game.state.tablesData.id = '1';
game.state.tablesData.difficulty = 'easy';
game.state.tablesData.items = [
  { 
    "type": "food",
    "name": "burger",
    "quantity": 2
  }
];

// console.log(game.state.tablesData.id);
// console.log(game.state.tablesData.difficulty);
// console.log(game.state.tablesData.items);


// {
//   "id": "1",
//   "difficulty": "easy",
//   "items": [
//     {
//       "type": "food",
//       "name": "burger",
//       "quantity": 2
//     },
//     {
//       "type": "drink",
//       "name": "cola",
//       "quantity": 3
//     },
//   ]
// }

const maxTime = 60;
const foodOptions = ['french fries', 'burger', 'taco', 'wings', 'chips and salsa', 'tostada', 'pasta'];
const drinkOptions = ['cola', 'sparkling water', 'beer', 'tequila', 'wine', 'tea', 'milkshake', 'whiskey', 'coffee'];

const createTable = () => {
  let gameData = game.state.tablesData;
  gameData.id = '1';
  gameData.difficulty = 'easy';
  gameData.items = [
    { 
      "type": "food",
      "name": randomArrItem(foodOptions),
      "quantity": randomQuantity(gameData.difficulty)
    }
  ];
  let newTableDiv = document.createElement('DIV');
  let newTableHeading = document.createElement('H4');
  let newTableItems = document.createElement('UL');
  let newTableItem = document.createElement('LI');

  let newTableHeadingText = document.createTextNode(`Table ${gameData.id}`);
  let newTableItemText = document.createTextNode(`${gameData.items[0].name}: ${gameData.items[0].quantity}`);

  newTableDiv.id = `table-${gameData.id}`;

  newTableDiv.appendChild(newTableItems);
  newTableItems.appendChild(newTableItem);
  newTableItem.appendChild(newTableItemText);

  newTableDiv.appendChild(newTableHeading);
  newTableHeading.appendChild(newTableHeadingText);
  return newTableDiv;
}

const createAction = (index) => {
  let newActionButton = document.createElement('BUTTON');
  let newActionButtonText = document.createTextNode('Action');
  newActionButton.appendChild(newActionButtonText);
  return newActionButton;
}

const randomQuantity = (difficulty) => {
  if (difficulty === 'medium') {
    return Math.floor(Math.random() * 9) + 1;
  } else if (difficulty === 'hard') {
    return Math.floor(Math.random() * 6) + 1;
  } else {
    return Math.floor(Math.random() * 3) + 1;
  }
}

const randomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

window.addEventListener('load', () => {
  const actionsEl = document.querySelector('#game-container__actions');
  const tablesEl = document.querySelector('#game-container__tables');

  let counter = 0;
  let timer = setInterval(() => startTime(), 1000);

  const startTime = () => {
    if (counter === maxTime) {
      clearInterval(timer);
    } else {
      counter++;
      console.log(counter);
    }
  }

  startTime();

  // let table1 = new Table(1);
  // create els
  actionsEl.insertAdjacentElement('beforeend', createAction(1));
  tablesEl.insertAdjacentElement('beforeend', createTable());

  // needs some way to run on every second
  // if click OR if table time up, remove table

})




