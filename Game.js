const Game = {};

Game.state = {
  level: 0,
  points: 0,
  tablesData: {},
  advanceLevel: () => {
    Game.state.level++;
  },
  startOver: () => {
    Game.state.level = 0;
  },
  addPoints: () => {
    Game.state.points++;
  },
};

export default Game;