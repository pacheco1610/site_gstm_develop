function modelDestino(data) {
  const locality = data?.data?.map(item => {
    const itemJson = JSON.parse(item?.attributes?.locacion);
    const numberTrips = data?.data?.filter(travel => itemJson?.locality === JSON.parse(travel?.attributes?.locacion)?.locality)
    if (itemJson.locality === '') {
      console.log(item.id)
    }
    return [itemJson?.locality,{...itemJson, numberTrips: numberTrips.length}]
  })

  console.log(locality, 'locality')
  const localityMap = new Map(locality);
  const filterLocality = [...localityMap.values()]
  return filterLocality;
}

export default modelDestino;