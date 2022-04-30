import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await ClienteRepository.getClientes();
}

async function getCliente(id) {
  return await ClienteRepository.getCliente(id);
}

async function deleteCliente(id) {
  //if (!AnimalRepository.getAnimaisPeloCliente(id).length) {
  return await ClienteRepository.deleteCliente(id);
  //} else {
  //throw new Error("Cliente possui animais cadastrados");
  //}
}

async function updateCliente(cliente) {
  return await ClienteRepository.updateCliente(cliente);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
