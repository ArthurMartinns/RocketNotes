import * as S from './header.styles'
import { RiShutDownLine } from "react-icons/ri";

function Header() {
    return (
        <S.Container>
            <S.Profile>
                <img src="https://github.com/ArthurMartinns.png" alt="" />
                <div>
                    <span>
                        Bem vindo 
                    </span>
                    <strong>
                        Arthur Martins
                    </strong>
                </div>
            </S.Profile>

            <S.Button>
                <RiShutDownLine />
            </S.Button>
        </S.Container>
    )
}

export default Header