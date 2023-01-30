/* eslint-disable no-plusplus */
const headers = (columns, arr) => {
  const headerArray = []
  for (let i = 0; i < columns.length; i++) {
    headerArray.push(columns[i].label)
  }
  arr.push(headerArray)
}

const tBody = (data, columns, arr) => {
  for (let i = 0; i < data.length; i++) {
    const row = []
    for (let j = 0; j < columns.length; j++) {
       row.push(data[i][columns[j].id])
    }
    arr.push(row)
  }
}

const handleDownloadClick = (columns, data) => {
  const csvArray = [] 
  headers(columns, csvArray)
  tBody(data, columns, csvArray)
  const csv = csvArray.map((d) => d).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'casas.csv' )
  document.body.appendChild(link)
  link.click()
}

export default handleDownloadClick
