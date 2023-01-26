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
    <CSVLink
      style={{ textDecoration: 'none', color: 'white', alignSelf: 'flex-end' }}
      data={data}
      headers={headers}
    >
      <Button
        style={{ marginBottom: '1rem', width: '200px' }}
      >
        Download me
      </Button>
    </CSVLink>
  )
}

export default Descargar
