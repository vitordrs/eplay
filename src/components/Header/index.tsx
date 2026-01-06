import { HeaderBar, LinkItem, Links, LintCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoçoçes</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LintCart href="#">
      x - produto(s) <img src={carrinho} alt="carrinho" />
    </LintCart>
  </HeaderBar>
)

export default Header
