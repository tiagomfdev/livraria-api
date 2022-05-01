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

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
