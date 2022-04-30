import AutorService from "../services/autor.service.js";

async function createAutor(req, res, next) {
  try {
    const autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Nome, E-mail, Telefone são obrigatórios.");
    }

    res.send(await AutorService.createAutor(autor));
  } catch (error) {
    next(error);
  }
}

async function getAutores(req, res, next) {
  try {
    res.send(await AutorService.getAutores());
  } catch (error) {
    next(error);
  }
}

async function getAutor(req, res, next) {
  try {
    res.send(await AutorService.getAutor(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function deleteAutor(req, res, next) {
  try {
    res.send(await AutorService.deleteAutor(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.autor_id || !autor.nome || !autor.email || !autor.telefone) {
      throw new Error("ID, Nome, E-mail, Telefone são obrigatórios.");
    }

    autor = await AutorService.updateAutor(autor);
    res.send(autor);
  } catch (error) {
    next(error);
  }
}

export default {
  createAutor,
  getAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
