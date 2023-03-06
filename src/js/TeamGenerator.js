/* eslint-disable generator-star-spacing */
export default class TeamGenerator {
  constructor(...players) {
    this.players = players;
  }

  *[Symbol.iterator]() {
    yield* this.players;
  }
}
