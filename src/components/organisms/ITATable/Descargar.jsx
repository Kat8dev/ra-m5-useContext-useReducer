import { CSVLink } from 'react-csv'
import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button } from '../../atoms'

function Descargar() {
  const { state } = useContext(TableContext)
  const { data } = state

  const headers = [
    { label: 'Nombre', key: 'title' },
    { label: 'Precio', key: 'price' },
    { label: 'Barrio', key: 'district' },
    { label: 'Ciudad', key: 'city' },
    { label: 'Tipo', key: 'type' },
  ]

  return (
    <Button style={{marginBottom: '1rem', width: '200px', alignSelf: 'flex-end'}}>
      <CSVLink data={data} headers={headers}>
        Download me
      </CSVLink>
    </Button>
  )
}

export default Descargar
