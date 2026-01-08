import Tag from '../Tag'
import RE4 from '../../assets/images/resident.png'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src={RE4} />
    <Titulo>Nome jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Plataforma</Tag>
    <Descricao>Descrição descritiva do jogo que vai ser jogado</Descricao>
  </Card>
)

export default Product
