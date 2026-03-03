import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return (
      <div className="container">
        <Loader />
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <s>{parseToBrl(game.prices.old)}</s> <br /> por apenas
            {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar a orferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
