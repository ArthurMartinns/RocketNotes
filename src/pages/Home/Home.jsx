import * as S from './Home.styles'
import Header from '../../components/Header/header'
import { FiPlus } from 'react-icons/fi'
import Section from '../../components/Section/section'
import Note from '../../components/Note/note.jsx'
import {Input} from '../../components/Input/input.jsx'
import { FaSearch } from 'react-icons/fa'

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
                <Input placeholder="Pesquisar pelo titulo" icon={FaSearch} />
            </S.Search>

            <S.Content>

            <Section title="Minhas notas">
                <Note data={{
                    title: 'React',
                    tags: [
                        { id: '1', name: 'react' },
                        { id: '2', name: 'rocketseat' }
                    ]
                }}
                />
            </Section>

            </S.Content>

            <S.NewNote>
                <FiPlus/>
                Criar Nota
            </S.NewNote>

        </S.Container>
    )
}

export default Home