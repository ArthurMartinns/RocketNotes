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
        <main>
          <S.Content>
            <ButtonText title={'Excluir Notas'}/>
            
            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Placeat quisquam eaque veniam autem dolorum repellat esse earum quis, 
              ad ratione et fugiat voluptatem. Earum unde omnis ducimus in odio suscipit.
            </p>

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
          </S.Content>
        </main>
    </S.Container>
  )
}

export default Details;