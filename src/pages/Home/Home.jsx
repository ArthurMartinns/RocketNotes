import * as S from './Home.styles'
import Header from '../../components/Header/header'
import { FiPlus } from 'react-icons/fi'

function Home() {
    return (
        <S.Container>

            <S.Brand>
                <h1>RocketNotes</h1>
            </S.Brand>

            <Header/>

            <S.Menu>
                <ul>
                    <li>
                        Todos
                    </li>
                    <li>
                        FrontEnd
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        React
                    </li>
                </ul>
            </S.Menu>

            <S.Search>

            </S.Search>

            <S.Content>

            </S.Content>

            <S.NewNote>
                <FiPlus/>
                Criar Nota
            </S.NewNote>

        </S.Container>
    )
}

export default Home