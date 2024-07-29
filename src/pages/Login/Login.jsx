import * as S from './Login.styles'

function Login() {
  return (
    <S.Background> 
      <S.Left> 
        <S.Top>
          <S.Left_h1>
            RocketNotes
          </S.Left_h1>
          <S.Left_p>
            Aplicação para salvar e gerenciar seus links úteis.
          </S.Left_p>
        </S.Top>
      </S.Left>
      <S.Right> 
        <img src="assets/imgLogin.png" alt="" />
      </S.Right>
    </S.Background>
  );
}

export default Login;
