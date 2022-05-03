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

async function createLivroInfo(req, res, next) {
  try {
    let info = req.body;
    /*
    if (!post.titulo) {
      throw new Error("Titulo é obrigatorio");
    } */

    await LivroService.createLivroInfo(info);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function getLivroInfo(req, res, next) {
  try {
    const info = await LivroService.getLivroInfo(req.params.id);
    res.send(info);
  } catch (error) {
    next(error);
  }
}

async function createAvaliacao(req, res, next) {
  try {
    let avaliacao = req.body;

    avaliacao = await LivroService.createAvaliacao(avaliacao, req.params.id);
    res.send(avaliacao);
  } catch (error) {
    next(error);
  }
}

async function updateLivroInfo(req, res, next) {
  try {
    res.send(await LivroService.updateLivroInfo(req.body));
  } catch (error) {
    next(error);
  }
}

async function deleteLivroInfo(req, res, next) {
  try {
    res.send(await LivroService.deleteLivroInfo(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function deleteLivroInfoAvaliacao(req, res, next) {
  try {
    res.send(
      await LivroService.deleteLivroInfoAvaliacao(
        req.params.id,
        req.params.indice
      )
    );
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
  createAvaliacao,
  getLivroInfo,
  createLivroInfo,
  updateLivroInfo,
  deleteLivroInfo,
  deleteLivroInfoAvaliacao,
};
