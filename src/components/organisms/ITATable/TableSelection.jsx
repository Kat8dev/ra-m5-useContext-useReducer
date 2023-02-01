/* eslint-disable no-dupe-keys */
import { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { columnsBarrios, columnsViviendas } from '../../../constants'
import Descargar from './Descargar'
import { FlexBox } from '../../../styles'
import { Button } from '../../atoms'

const TableSelectionStyled = styled(FlexBox).attrs({
  direction: 'row',
  justify: 'flex-end',
})`
  gap: 1rem;
  margin-bottom: 1rem;
`

function TableSelection() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, currentData } = state

  return (
    <TableSelectionStyled>
      <Button
        type="button"
        onClick={() =>
          dispatch({ type: Actions.SET_VIVIENDAS, payload: columnsViviendas })
        }
      >
        Viviendas
      </Button>
      <Button
        type="button"
        onClick={() =>
          dispatch({ type: Actions.SET_BARRIOS, payload: columnsBarrios })
        }      
      >
        Por barrio
      </Button>
      <Descargar columns={columns} data={currentData} />
    </TableSelectionStyled>
  )
}

export default TableSelection
