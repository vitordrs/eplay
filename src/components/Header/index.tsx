import { HeaderBar, LinkItem, Links, LintCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
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
