import { FiPlus, FiX } from 'react-icons/fi'
import * as S from './note-item.styles'

export default function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <S.Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </S.Container>
  )
}