import { useContext } from 'react'
// eslint-disable-next-line import/named
import { SelectGroup } from '../../../molecules'
import { TableContext } from '../store/context'
import { options } from '../../../../constants'
import { Text } from '../../../atoms'
import { FlexBox } from '../../../../styles'

function RightBar() {
  const { state, dispatch } = useContext(TableContext)

  const handleOnChange = (e) => {
    dispatch({ type: 'SET_ITEMPERPAGE', payload: e.target.value })
    console.log(state)
  }

  return (
    <FlexBox direction="row" align="center" justify='flex-end' style={{ gap: '1rem' }}>
      <Text style={{ fontWeight: '900' }}>Mostrar: </Text>
      <SelectGroup
        label="Mostrar"
        id="perPage"
        name="perPage"
        onChange={handleOnChange}
        options={options}
        // eslint-disable-next-line react/jsx-boolean-value
        hideLabel={true}
        defaultText="10"
      />
    </FlexBox>
  )
}

export default RightBar
