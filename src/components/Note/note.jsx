/* eslint-disable react/prop-types */
import Tag from '../../components/Tag/tag'
import * as S from './note'

function Note({ data, ...rest }) {
  return (
    <S.Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => 
                <Tag 
                  key={tag.id} 
                  title={tag.name} 
                />
              )
          }
        </footer>
      }
    </S.Container>
  )
}

export default Note