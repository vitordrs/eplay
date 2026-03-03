import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variante?: 'primary' | 'second'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  variante = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variante={variante}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
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
