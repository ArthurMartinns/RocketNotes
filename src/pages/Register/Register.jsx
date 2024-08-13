import { FaEnvelope, FaUser } from 'react-icons/fa'
import Input from '../../components/Input/input'
import * as S from './Register.styles'
import { GiPadlock } from 'react-icons/gi'
import Button from '../../components/Button/button'
import ButtonText from '../../components/ButtonText/buttonText'

function Register() {
    return(
        <S.Background_register>
           <S.Left>
            
           </S.Left>
           <S.Right>
            <S.Content>
                <S.Top>
                    <S.Top_h2>
                        RocketNotes
                    </S.Top_h2>
                    <S.Top_p>
                        Aplicação para salvar e gerenciar seus links úteis
                    </S.Top_p>
                </S.Top>
                <S.Bottom>
                    <S.Bottom_h2>
                        Faça seu cadastro
                    </S.Bottom_h2>
                    <S.Inputs>
                        <Input icon={FaUser} placeholder="Nome"/>
                        <Input icon={FaEnvelope} placeholder="Email"/>
                        <Input icon={GiPadlock} placeholder="Senha"/>
                        <Button title={"Cadastrar"}/>
                    </S.Inputs>

                    <S.Back>
                        <ButtonText title={"Voltar para o login"}/>
                    </S.Back>
                </S.Bottom>
            </S.Content>
           </S.Right>
        </S.Background_register>
    )
}

export default Register