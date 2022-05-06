import Livro from "../models/livro.model.js";
import Autor from "../models/autor.model.js";

import LivroInfoSchema from "../schemas/livroInfo.schema.js";
import { connect } from "./mongo.db.js";

async function insertLivro(livro) {
  try {
    return await Livro.create(livro);
  } catch (error) {
    throw error;
  }
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
    let { dataValues: livro } = await Livro.findByPk(id);
    const { _doc: livroinfo } = await getLivroInfo(id);

    livro = { ...livro, livroinfo };
    return livro;
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
          as: "autor",
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

//Parte do mongodb
async function createLivroInfo(info) {
  try {
    const mongoose = await connect();
    const Info = mongoose.model("livroInfo", LivroInfoSchema);

    info = new Info(info);
    await info.save();
  } catch (error) {
    throw error;
  }
}

async function updateLivroInfo(info) {
  try {
    const mongoose = await connect();
    const Info = mongoose.model("livroInfo", LivroInfoSchema);

    await Info.findOneAndUpdate(
      { livroId: info.livroId },
      { $set: { ...info } }
    );
  } catch (error) {
    throw error;
  }
}

async function deleteLivroInfo(id) {
  try {
    const mongoose = await connect();
    const Info = mongoose.model("livroInfo", LivroInfoSchema);

    await Info.deleteOne({ livroId: id });
  } catch (error) {
    throw error;
  }
}

async function getLivroInfo(id) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("livroInfo", LivroInfoSchema);
    const query = LivroInfo.findOne({ livroId: id });
    const livroInfo = await query.exec();

    return livroInfo;
  } catch (error) {
    throw error;
  }
}

async function createAvaliacao(avaliacao, livroId) {
  try {
    const livroInfo = await getLivroInfo(livroId);

    const aval = {
      nome: avaliacao.nome,
      nota: avaliacao.nota,
      avaliacao: avaliacao.avaliacao,
    };

    livroInfo.avaliacoes.push(aval);
    await updateLivroInfo(livroInfo);
  } catch (error) {
    throw error;
  }
}

async function deleteLivroInfoAvaliacao(livroId, indice) {
  try {
    const livroInfo = await getLivroInfo(livroId);

    if (livroInfo) {
      livroInfo.avaliacoes.splice(indice, 1);

      await updateLivroInfo(livroInfo);
    }
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
  createLivroInfo,
  getLivroInfo,
  createAvaliacao,
  updateLivroInfo,
  deleteLivroInfo,
  deleteLivroInfoAvaliacao,
};
