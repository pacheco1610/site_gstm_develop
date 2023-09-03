function modeloTrips(data) {
  if (data.length) {
    const tabla = {};
    const unicos = data?.filter((indice) => {
      return tabla.hasOwnProperty(indice) ? false : (tabla[indice] = true);
    });
  
  console.log(unicos, 'unicos')
  }
}

export default modeloTrips;