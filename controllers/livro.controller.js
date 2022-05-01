import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
  try {
    let livro = req.body;

    //LivroService
    livro = await LivroService.createLivro(livro);
    res.send(livro);
  } catch (error) {
    next(error);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await LivroService.getLivros(req.query.autorId));
  } catch (error) {
    next(error);
  }
}
async function getLivro(req, res, next) {
  try {
    res.send(await LivroService.getLivro(req.params.id));
  } catch (error) {
    next(error);
  }
}
async function deleteLivro(req, res, next) {
  try {
    await LivroService.deleteLivro(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}
/**
 * O endpoint não deve permitir que o nome e autor do livro sejam
 * alterados, evitando assim possíveis inconsistências
 */
async function updateLivro(req, res, next) {
  try {
    let livro = req.body;

    if (livro.nome || livro.autorId) {
      throw new Error("Nome e autor não devem ser alterados");
    }

    //LivroService
    livro = await LivroService.updateLivro(livro);
    res.send(livro);
  } catch (error) {
    next(error);
  }
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
