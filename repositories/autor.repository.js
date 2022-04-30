import Autor from "../models/autor.model.js";

async function insertAutor(autor) {
  try {
    return await Autor.create(autor);
  } catch (error) {
    throw error;
  }
}

async function getAutores() {
  try {
    return Autor.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAutor(id) {
  try {
    return await Autor.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function updateAutor(autor) {
  try {
    await Autor.update(autor, {
      where: {
        autorId: autor.autorId,
      },
    });

    return await getAutor(autor.autorId);
  } catch (error) {
    throw error;
  }
}

async function deleteAutor(id) {
  try {
    await Autor.destroy({
      where: {
        autorId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertAutor,
  getAutores,
  getAutor,
  updateAutor,
  deleteAutor,
};
