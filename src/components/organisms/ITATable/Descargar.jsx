import ReactDOMServer from 'react-dom/server'
import html2pdf from 'html2pdf.js/dist/html2pdf.min'
// eslint-disable-next-line import/named
import { Button } from '../../atoms'

function Descargar({ data }) {
  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(data)
    html2pdf().from(printElement).save()
  }

  return (
    <Button onClick={printHandler} style={{marginBottom: '1rem'}}>
      Descargar
    </Button>
  )
}

export default Descargar
