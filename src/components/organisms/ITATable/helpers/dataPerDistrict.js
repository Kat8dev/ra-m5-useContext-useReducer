/* eslint-disable no-param-reassign */
const getAllDistricts = (data) => {
  const allDistricts = []
  data.forEach((house) => {
    if (!allDistricts.includes(house.district)) {
      allDistricts.push(house.district)
    }
  })
  return allDistricts
}

const quantities = (district, data) => {
  const count = data.reduce((cur, next) => {
    if (next.district === district) {
      // eslint-disable-next-line no-param-reassign
      if (!cur.hQ && !cur.mP) {
        cur.hQ = 1
        cur.mP = next.price
      } else {
        cur.hQ += 1
        cur.mP += next.price
      }
      if (next.newConstruction) {
        if (!cur.nC) {
          cur.nC = 1
        } else {
          cur.nC += 1
        }
      }
    }
    return cur
  }, {})
  return count
}

export default function dataPerDistrict(data) {
  const allDistricts = getAllDistricts(data)
  const districtData = []
  allDistricts.forEach((d, index) => {
    const { hQ, mP, nC } = quantities(d, data)
    districtData.push({
      id: index,
      district: d,
      houseQuantity: hQ,
      midPrice: (mP / hQ).toFixed(2),
      newConstruction: nC,
    })
  })
  return districtData
}
