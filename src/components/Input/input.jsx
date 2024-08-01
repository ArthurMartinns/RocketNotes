import * as S from './input.styles'

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest }) {
    return (
      <S.Container>
        {Icon && <Icon size={15} />}
        <input {...rest} />
      </S.Container>
    )
  }

export default Input