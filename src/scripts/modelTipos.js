function modelTipos(data) {
  const tipo = data?.data?.map(item => {
    const itemJson = item?.attributes?.tipo_servicio?.data?.attributes;

    const numberTrips = data?.data?.filter(travel => itemJson.titulo === travel?.attributes?.tipo_servicio?.data?.attributes?.titulo)
    return [itemJson.titulo,{...itemJson, numeroTipos: numberTrips.length}]
  })

  const localityMap = new Map(tipo);
  const filterLocality = [...localityMap.values()]
  return filterLocality.sort();
}

export default modelTipos;