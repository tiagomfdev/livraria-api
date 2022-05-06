import VendaRepository from "../repositories/venda.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

async function createVenda(venda) {
  const livro = await LivroRepository.getLivro(venda.livroId);

  if (livro.estoque <= 0) {
    throw new Error("Livro sem estoque!");
  }

  return await VendaRepository.insertVenda(venda);
}

async function getVendas(clienteId, livroId) {
  if (clienteId) {
    return await VendaRepository.getVendasByCliente(clienteId);
  }

  if (livroId) {
    return await VendaRepository.getVendasByLivro(livroId);
  }

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
