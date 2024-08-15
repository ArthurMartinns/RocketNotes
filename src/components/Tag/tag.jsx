import * as S from './tag.styles'

// eslint-disable-next-line react/prop-types
function Tag({title, ...rest}) {
    return(
        <S.Container {...rest}>
            {title}
        </S.Container>
    )    
}
export default Tag