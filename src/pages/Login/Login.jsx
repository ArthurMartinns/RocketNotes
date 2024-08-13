import { FaUser } from 'react-icons/fa';
import Input from '../../components/Input/input';
import * as S from './Login.styles';
import { GiPadlock } from 'react-icons/gi';
import Button from '../../components/Button/button';
import ButtonText from '../../components/ButtonText/buttonText';

function Login() {
  return (
    <S.Background>
      <S.Left>
        <S.Content>
          <S.Top>
            <S.Top_h2>
              RocketNotes
            </S.Top_h2>
            <S.Top_p>
              Aplicação para salvar e gerenciar suas aplicações
            </S.Top_p>
          </S.Top>
          <S.Bottom>
            <S.Bottom_h2>
              Faça login
            </S.Bottom_h2>
            <S.Inputs>
              <Input icon={FaUser} placeholder="Nome"/>
              <Input icon={GiPadlock} placeholder="Senha"/>
            </S.Inputs>
            <Button title={"ENTRAR"}/>
          </S.Bottom>

          <S.Back>
            <ButtonText title={"Realizar cadastro"}/>
          </S.Back>
        </S.Content>
      </S.Left>
      <S.Right>
      </S.Right>
    </S.Background>
  );
}

export default Login;
