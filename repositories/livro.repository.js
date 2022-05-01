import Livro from "../models/livro.model.js";

import Autor from "../models/autor.model.js";

async function insertLivro(livro) {
  try {
    return await Livro.create(livro);
  } catch (error) {
    throw error;
  }
  cls;
}

async function getLivros() {
  try {
    return await Livro.findAll();
  } catch (error) {
    throw error;
  }
}

async function getLivro(id) {
  try {
    return await Livro.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function getLivrosPeloAutor(autorId) {
  try {
    return Livro.findAll({
      include: [
        {
          model: Autor,
          where: { autorId },
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function deleteLivro(id) {
  try {
    return await Livro.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateLivro(livro) {
  try {
    await Livro.update(livro, {
      where: {
        livroId: livro.LivroId,
      },
    });
    return await getLivro(livro.livroId);
  } catch (error) {
    throw error;
  }
}

export default {
  insertLivro,
  getLivros,
  getLivro,
  updateLivro,
  getLivrosPeloAutor,
  deleteLivro,
};
