import * as S from './Create.styles'
import Header from '../../components/Header/header'
import Input from '../../components/Input/input'
import Section from '../../components/Section/section'
import NoteItem from '../../components/NoteItem/note-item'
import Button from '../../components/Button/button'

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
                        <NoteItem
                            value='www.teste.com.br'
                        />
                        <NoteItem
                            isNew
                            placeholder='Novo link'
                        />
                    </Section>

                    <Section title={'Marcadores'}>
                        <div className="tags">
                            <NoteItem
                                value={'react'}
                            />
                            <NoteItem
                                isNew
                                placeholder='Novo marcador'
                            />
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </S.Mid>
            </S.Back>
        </S.Content>
    );
}

export default CreateNote;