import * as S from './buttonText.styles'

// eslint-disable-next-line react/prop-types
function ButtonText({title, ...rest}) {
    return (
        <S.Container
            type="button"
            {...rest}
        >
        {title}
        </S.Container>
    )
}


export default ButtonText