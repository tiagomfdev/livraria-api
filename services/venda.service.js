import VendaRepository from "../repositories/venda.repository.js";

async function createVenda(venda) {
  return await VendaRepository.insertVenda(venda);
}

async function getVendas() {
  return await VendaRepository.getVendas();
}

async function getVenda(id) {
  return await VendaRepository.getVenda(id);
}

async function deleteVenda(id) {
  let erros = [];
  /*
  const animais = await AnimalRepository.getAnimaisByVendaId(id);

  if (animais.length > 0) {
    erros.push("venda possui animais cadastrados.");
  } */

  if (erros.length > 0) {
    throw new Error(erros);
  }

  await VendaRepository.deleteVenda(id);
}

async function updateVenda(venda) {
  return await VendaRepository.updateVenda(venda);
}

export default {
  createVenda,
  getVendas,
  getVenda,
  deleteVenda,
  updateVenda,
};
