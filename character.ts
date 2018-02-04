export interface character {
  name: string,
  background: string,
  level: number,
  classLevels: Array<number>,
  stats: {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
  }
}
