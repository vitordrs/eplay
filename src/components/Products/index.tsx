import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  desc: string
  infos: string[]
  img: string
}

const Product = ({ category, desc, img, infos, system, title }: Props) => (
  <Card>
    <img src={img} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{desc}</Descricao>
  </Card>
)

export default Product
