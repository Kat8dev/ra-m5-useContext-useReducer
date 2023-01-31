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

export default function arrayForDownload(columns, data) {
  const csvArray = []
  headers(columns, csvArray)
  tBody(data, columns, csvArray)
  return csvArray
}
