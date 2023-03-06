/* eslint-disable no-plusplus */
export default class TeamIntegrator {
  constructor(...players) {
    this.players = players;
  }

  [Symbol.iterator]() {
    this.nextId = 0;
    this.current = this.players[this.nextId];
    return this;
  }

  next() {
    if (this.nextId < this.players.length) {
      return { done: false, value: this.players[this.nextId] };
    }
    this.nextId++;
    return { done: true, value: undefined };
  }
}
