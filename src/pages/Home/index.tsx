import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import RE4 from '../../assets/images/resident.png'
import Fifa from '../../assets/images/fifa.png'
import Diablo from '../../assets/images/diablo.png'
import Jedi from '../../assets/images/star_wars.png'
import SF6 from '../../assets/images/street-figther.png'
import Zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    desc: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windowns',
    infos: ['R$199,90', '-10%'],
    img: RE4
  },
  {
    id: 2,
    category: 'Ação',
    desc: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windowns',
    infos: ['R$199,90', '-10%'],
    img: RE4
  },
  {
    id: 3,
    category: 'Esporte',
    desc: 'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$99,90', '-50%'],
    img: Fifa
  },
  {
    id: 4,
    category: 'Esporte',
    desc: 'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['R$99,90', '-50%'],
    img: Fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    desc: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windowns',
    infos: ['05/04'],
    img: Diablo
  },
  {
    id: 6,
    category: 'Aventura',
    desc: 'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windowns',
    infos: ['05/04'],
    img: Jedi
  },
  {
    id: 7,
    category: 'Luta',
    desc: 'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'PS5',
    infos: ['05/04'],
    img: SF6
  },
  {
    id: 4,
    category: 'RPG',
    desc: 'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    img: Zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
