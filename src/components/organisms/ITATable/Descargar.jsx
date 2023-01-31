import arrayForDownload from './helpers/handleDownloadClick'

const handleDownloadClick = ({ columns, data }) => {
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

export default handleDownloadClick
