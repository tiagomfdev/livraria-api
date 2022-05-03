import LivroRepository from "../repositories/livro.repository.js";

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function getLivros(autorId) {
  if (autorId) {
    return await LivroRepository.getLivrosPeloAutor(autorId);
  }

  return await LivroRepository.getLivros();
}

async function getLivro(id) {
  return await LivroRepository.getLivro(id);
}

async function deleteLivro(id) {
  let erros = [];
  /*
  const animais = await AnimalRepository.getAnimaisByLivroId(id);

  if (animais.length > 0) {
    erros.push("livro possui animais cadastrados.");
  } */

  if (erros.length > 0) {
    throw new Error(erros);
  }

  await LivroRepository.deleteLivro(id);
}

async function updateLivro(livro) {
  return await LivroRepository.updateLivro(livro);
}

async function createLivroInfo(info) {
  return await LivroRepository.createLivroInfo(info);
}

async function getLivroInfo(id) {
  return await LivroRepository.getLivroInfo(id);
}

async function createAvaliacao(avaliacao, livroId) {
  return await LivroRepository.createAvaliacao(avaliacao, livroId);
}

async function updateLivroInfo(livroInfo) {
  return await LivroRepository.updateLivroInfo(livroInfo);
}

async function deleteLivroInfo(livroId) {
  return await LivroRepository.deleteLivroInfo(livroId);
}

async function deleteLivroInfoAvaliacao(livroId, indice) {
  return await LivroRepository.deleteLivroInfoAvaliacao(livroId, indice);
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  createLivroInfo,
  updateLivro,
  getLivroInfo,
  createAvaliacao,
  updateLivroInfo,
  deleteLivroInfo,
  deleteLivroInfoAvaliacao,
};
