import { IoArrowBack } from 'react-icons/io5';
import * as S from './Profile.styles'
import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';

function Profile() {
    return(
        <S.Container>
        <S.Header>
            <S.Content>
                <S.Itens>
                    <IoArrowBack fontSize={20}/>
                </S.Itens>
                <S.Image>
                    <img src="https://github.com/ArthurMartinns.png" alt="" />
                </S.Image>
            </S.Content>
        </S.Header>
        <S.Main>
            <S.Itens_Main>
                <S.Top>
                    <Input icon={FaUser} placeholder={"Arthur"}/>
                    <Input icon={FaEnvelope} placeholder={"arthur@gmail.com"}/>
                </S.Top>
                <S.Bottom>
                    <Input icon={GiPadlock} placeholder={"Senha Atual"}/>
                    <Input icon={GiPadlock} placeholder={"Nova Senha"}/>
                </S.Bottom>
                <Button title={"Salvar"}/>
            </S.Itens_Main>
        </S.Main>
    </S.Container>
    )
}

export default Profile;