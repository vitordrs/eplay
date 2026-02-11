import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const year = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">AÇÃO</Link>
          </li>
          <li>
            <Link to="/categories#sports">ESPORTES</Link>
          </li>
          <li>
            <Link to="/categories#simulation">SIMULAÇÃO</Link>
          </li>
          <li>
            <Link to="/categories#fight">LUTA</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{year} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
