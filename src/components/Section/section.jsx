import * as S from './section.styles'

// eslint-disable-next-line react/prop-types
function Section({title, children}) {
    return( 
        <S.Container>
            <h2>
                {title}
            </h2>
            {children}
        </S.Container>
    )
}

export default Section
