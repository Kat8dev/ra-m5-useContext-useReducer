import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import dataPerDistrict from '../components/organisms/ITATable/helpers/dataPerDistrict'
import useFetch from '../hooks/useFetch'
import { urls, columns } from '../constants'

function Data() {
  const { isLoading, isSuccess, data } = useFetch(urls.houses)
  const districtData = dataPerDistrict(data)

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        {isLoading && <div>Loading</div>}
        {isSuccess && <ITATable columns={columns} data={data} perDistrict={districtData} />}
      </Container>
    </Body>
  )
}

export default Data
