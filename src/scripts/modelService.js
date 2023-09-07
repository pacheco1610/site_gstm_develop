import modelDestinos from './modelDestinos'

function modelService(data) {
  this.destinos = new modelDestinos(data)
}

export default modelService;