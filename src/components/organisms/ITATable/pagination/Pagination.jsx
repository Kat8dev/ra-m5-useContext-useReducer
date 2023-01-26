import LeftBar from "./Left"
import RightBar from "./Right"
import { FlexBox } from "../../../../styles"

export default function Pagination() {
  return (
    <FlexBox style={{marginTop: '1rem'}} direction='row' justify='space-between'>
      <LeftBar />
      <RightBar />
    </FlexBox>
  )
}
