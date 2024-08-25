import * as S from './Create.styles'
import Header from '../../components/Header/header'
import Input from '../../components/Input/input'
import Section from '../../components/Section/section'

function CreateNote() {
    return(
        <S.Content>
            <Header/>

            <S.Back>
                <S.Mid>
                    <S.SubHeader>
                        <h2>
                            Criar Nota
                        </h2>
                        <p>
                            Voltar
                        </p>
                    </S.SubHeader>

                    <S.SubMid>
                        <Input placeholder="Título" />
                        <Input placeholder="Observações" />
                    </S.SubMid>

                    <Section title={"Links Úteis"}>

                    </Section>
                </S.Mid>
            </S.Back>
        </S.Content>
    );
}

export default CreateNote;