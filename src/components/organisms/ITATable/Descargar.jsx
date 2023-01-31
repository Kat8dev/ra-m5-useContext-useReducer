import PropTypes from 'prop-types'
import arrayForDownload from './helpers/handleDownloadClick'

function Descargar ({ columns, data }) {
  const [ ...csvArray ] = arrayForDownload(columns, data)
  const csv = csvArray.map((d) => d).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)

  return (
    <a href={url} download="casas.csv">
      Download
    </a>
  )
}

Descargar.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([ PropTypes.object ]),
  ),
  data:  PropTypes.arrayOf(
    PropTypes.oneOfType([ PropTypes.object ]),
  ),
}

export default Descargar
