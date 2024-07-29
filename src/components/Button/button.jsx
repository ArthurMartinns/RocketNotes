import * as S from './button.styles'

// eslint-disable-next-line react/prop-types
function Button( { title, loading, ...rest } ) {
    return(
        <S.Container
            type='button'
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </S.Container>
    )
}

export default Button