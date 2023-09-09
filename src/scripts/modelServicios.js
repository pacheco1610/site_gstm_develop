import modelServicio from "./modelServicio";

function modelServicios(data) {
  this.servicios = data.map(item => new modelServicio(item))
}

export default modelServicios;