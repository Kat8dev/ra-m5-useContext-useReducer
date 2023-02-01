import { useEffect, useContext } from 'react'
import { Container } from '../../../styles'
import TableFooter from './pagination/index'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import PropTypes from 'prop-types'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import TableSelection from './TableSelection'

function Table({ columns, data, showHeader = true, perDistrict }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_CURRENTDATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    dispatch({ type: Actions.SET_DATAPERDISTRICT, payload: perDistrict })
    dispatch({ type: Actions.SET_ORIGINALDATA, payload: data })
  }, [data, columns, perDistrict, dispatch])

  return (
    <>
      <TableSelection />
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
  perDistrict: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ),
}

export default ITATable
