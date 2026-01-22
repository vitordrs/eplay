import feitico from '../../assets/images//feitico.png'
import Section from '../Section'
import { Items, Item } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={feitico} alt="imagem do jogo" />
      </Item>
      <Item>
        <img src={feitico} alt="imagem do jogo" />
      </Item>
      <Item>
        <img src={feitico} alt="imagem do jogo" />
      </Item>
      <Item>
        <img src={feitico} alt="imagem do jogo" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
