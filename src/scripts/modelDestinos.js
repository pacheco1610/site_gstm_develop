function modelDestino(data) {
  const locality = data?.data?.map(item => {
    const numberTrips = data?.data?.filter(travel => item?.attributes?.locacion?.locality === travel?.attributes?.locacion?.locality)
    return [item?.attributes?.locacion?.locality,{...item?.attributes?.locacion, numberTrips: numberTrips.length}]
  })

  const localityMap = new Map(locality);
  const filterLocality = [...localityMap.values()]
  return filterLocality;
}

export default modelDestino;