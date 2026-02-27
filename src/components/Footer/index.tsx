import * as S from './styles'

const year = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              AÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              ESPORTES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              LUTA
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de  promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de jogos em breve"
              to="/#coming-soon"
            >
              Em Breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{year} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
