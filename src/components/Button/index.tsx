import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variante?: 'primary' | 'second'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variante = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        variante={variante}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
