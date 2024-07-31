import * as S from './tag.styles'

// eslint-disable-next-line react/prop-types
function Tag({title}) {
    return(
        <S.Container>
            {title}
        </S.Container>
    )    
}
export default Tag;