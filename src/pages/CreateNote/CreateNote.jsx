import * as S from './Create.styles'
import Header from '../../components/Header/header'
import Input from '../../components/Input/input'

function CreateNote() {
    return(
        <S.Content>
            <Header/>

            <S.Back>
                <S.Mid>
                    <S.SubHeader>
                        <h2>
                            Notes
                        </h2>
                        <p>
                            Voltar
                        </p>
                    </S.SubHeader>

                    <S.SubMid>
                        <Input/>
                    </S.SubMid>
                </S.Mid>
            </S.Back>
        </S.Content>
    );
}

export default CreateNote;