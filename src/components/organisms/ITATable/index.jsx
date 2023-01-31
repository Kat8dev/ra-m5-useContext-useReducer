import { useEffect, useContext } from 'react'
import { Container } from '../../../styles'
import Descargar from './Descargar'
import TableFooter from './pagination/index'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import PropTypes from 'prop-types'
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
      <Descargar columns={columns} data={data} />
      <TableStyled>
        {showHeader && <TableHeader />}
        <TableBody />
      </TableStyled>
      <Container>
        <TableFooter />
      </Container>
    </>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      cell: PropTypes.func,
    }),
  ),
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ),
  showHeader: PropTypes.bool,
}

export default ITATable
