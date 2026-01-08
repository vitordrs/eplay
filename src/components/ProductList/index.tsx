import Product from '../Products'
import RE4 from '../../assets/images/resident.png'
import Fifa from '../../assets/images/fifa.png'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          desc="Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..."
          img={RE4}
          infos={['R$199,90', '-10%']}
          system="Windowns"
          title="Residente Evil 4"
        />
        <Product
          category="Ação"
          desc="Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..."
          img={RE4}
          infos={['R$199,90', '-10%']}
          system="Windowns"
          title="Residente Evil 4"
        />
        <Product
          category="Esporte"
          desc="EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2..."
          img={Fifa}
          infos={['R$99,90', '-50%']}
          system="PS5"
          title="FIFA 23"
        />
        <Product
          category="Esporte"
          desc="EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2..."
          img={Fifa}
          infos={['R$99,90', '-50%']}
          system="PS5"
          title="FIFA 23"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
