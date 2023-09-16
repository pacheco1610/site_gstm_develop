function modelServicio(item) {
  this.id = item.id;
  this.titulo = item?.attributes?.titulo;
  this.tipo = item?.attributes?.tipo_servicio?.data?.attributes?.titulo;
  this.precio = item?.attributes?.precio;
  this.unidad = item?.attributes?.unidad?.data?.attributes?.titulo;
  this.portada = item?.attributes?.portada?.data?.attributes?.url;
  this.locacion = JSON.parse(item?.attributes?.locacion);
  this.moneda = item?.attributes?.moneda?.data?.attributes?.titulo;
}

export default modelServicio;