import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, currentPage, itemPerPage } = state

  const sliceInitial = (currentPage -1) * itemPerPage
  const sliceEnd = itemPerPage + sliceInitial

  return (
    <tbody>
      {data.slice(sliceInitial , sliceEnd).map((d) => (     
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
