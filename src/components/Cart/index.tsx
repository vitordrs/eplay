import Button from '../Button'
import Hogwards from '../../assets/images/fundo_hogwarts.png'

import {
  Overlay,
  CarContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CarContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={Hogwards} />
          <div>
            <h3>nome jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 125,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={Hogwards} />
          <div>
            <h3>nome jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 125,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>X jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>em ate 6x sem juros</span>
      </Prices>
      <Button title="Clique para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CarContainer>
)

export default Cart
