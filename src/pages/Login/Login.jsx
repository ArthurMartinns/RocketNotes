import { FaEnvelope, FaLock } from 'react-icons/fa';
import * as S from './Login.styles';
  import Input from '../../components/Input/input';
import Button from '../../components/Button/button'
import ButtonText from '../../components/ButtonText/buttonText'

function Login() {
  return (
    <S.Background>
      <S.Left>
        <S.Top>
          <S.Left_h1>RocketNotes</S.Left_h1>
          <S.Left_p>Aplicação para salvar e gerenciar seus links úteis.</S.Left_p>
        </S.Top>
        <S.Bottom>
          <S.Bottom_h2>Faça login</S.Bottom_h2>
          <S.Inputs>
            <Input icon={FaEnvelope} placeholder="Digite uma mensagem: " />
            <Input icon={FaLock} placeholder="Digite uma mensagem: " />
          </S.Inputs>
          <S.Button>
            <Button title={"Entrar"}/>
          </S.Button>
          <S.ButtonText>
          <ButtonText title={"Criar Conta"}/>
          </S.ButtonText>
        </S.Bottom>
      </S.Left>
      <S.Right>
        <img src="assets/imgLogin.png" alt="" />
      </S.Right>
    </S.Background>
  );
}

export default Login;
