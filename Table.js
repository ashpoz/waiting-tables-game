class Table {

  constructor(data) {
    this.id = data.index;
    this.difficulty = data.difficulty;
    this.items = data.items;
  }
  static id = this.id;
  static items = this.items;

  get time() {
    return this.getTime();
  }

  getTime() {
    if (this.difficulty === 'medium') {
      return 9;
    } else if (this.difficulty === 'hard') {
      return 6;
    } else {
      return 3;
    }
  }
}

export default Table;