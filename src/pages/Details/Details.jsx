import * as S from './Details.styles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Section from '../../components/Section/section';

function Details() {
  return (
    <S.Container>
      <Header/>
        <Section title={"Links Úteis"}>
          <S.Links>
            <li>
              <a href="">
                https://rocketseat.com.br
              </a>
            </li>
            <li>
              <a href="">
                https://rocketseat.com.br
              </a>
            </li>
          </S.Links>
        </Section>
      <Button title={'Voltar'}/>
    </S.Container>
  )
}

export default Details;