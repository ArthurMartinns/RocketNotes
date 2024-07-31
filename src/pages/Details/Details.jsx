import * as S from './Details.styles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Section from '../../components/Section/section';
import Tag from '../../components/Tag/tag';
import ButtonText from '../../components/ButtonText/buttonText'

function Details() {
  return (
    <S.Container>

        <Header/>

        <ButtonText title={'Excluir Notas'}/>
        
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

        <Section title={"Marcadores"}>
          <Tag title={"Node.js"}/>
          <Tag title={"Express"}/>
        </Section>

        <Button title={'Voltar'}/>

    </S.Container>
  )
}

export default Details;