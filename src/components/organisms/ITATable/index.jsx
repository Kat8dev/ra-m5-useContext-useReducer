import { useEffect, useContext } from 'react'
import { Container } from '../../../styles'
import Descargar from './Descargar'
import Pagination from './pagination/Pagination'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <>
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
      </TableStyled>
      <Container>
        <Pagination />
      </Container>
    </>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Descargar data={<Table />}/>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
