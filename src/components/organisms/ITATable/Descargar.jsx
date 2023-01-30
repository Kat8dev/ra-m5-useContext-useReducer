import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button } from '../../atoms' 
import handleDownloadClick from './helpers/handleDownloadClick'

function Descargar() {
  const { state } = useContext(TableContext)
  const { data, columns } = state

  return (
    <Button type="button" onClick={() => handleDownloadClick(columns, data)}>
      Download
    </Button>
  )
}

export default Descargar
