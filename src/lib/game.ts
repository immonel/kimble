import { Color } from "$types";
import { colorMap } from "./colors";

export class Team {
  color: Color;
  name: string;
  penalty: number   = 0;
  points: number    = 0;
  raises: number    = 0;
  finished: boolean = false;

  constructor(color: Color) {
    this.color = color;
    this.name  = colorMap[this.color].name;
  }
}

export class Game {
  name: string;
  id: number;
  teams = {
    [Color.YELLOW]: new Team(Color.YELLOW),
    [Color.GREEN]:  new Team(Color.GREEN),
    [Color.BLUE]:   new Team(Color.BLUE),
    [Color.RED]:    new Team(Color.RED)
  }

  constructor() {
    const timestamp = Date.now()
    this.name = timestamp.toString()
    this.id = timestamp
  }
}