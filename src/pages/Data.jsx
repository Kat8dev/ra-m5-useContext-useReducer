import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import useFetch from "../hooks/useFetch"
import { urls } from '../constants'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price > 400000 ? 'red' : 'green' }}>{row.price}</span>
    ),
  },
  {
    id: 'district',
    label: 'Barrio',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
]

function Data() {
  const {isLoading, isSuccess, data} = useFetch(urls.houses)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        {isLoading && <div>Loading</div>}
        {isSuccess && <ITATable columns={columns} data={data} />}
      </Container>
    </Body>
  )
}

export default Data
