import Pagination from "./Pagination"
import RowPerPage from "./RowPerPage"
import { FlexBox } from "../../../../styles"

export default function TableFooter() {
  return (
    <FlexBox style={{marginTop: '1rem'}} direction='row' justify='space-between'>
      <Pagination />
      <RowPerPage />
    </FlexBox>
  )
}
