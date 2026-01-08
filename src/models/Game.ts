class Game {
  category: string
  desc: string
  img: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    desc: string,
    img: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.desc = desc
    this.img = img
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
