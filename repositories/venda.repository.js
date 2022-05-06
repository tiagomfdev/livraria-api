import Cliente from "../models/cliente.model.js";
import Livro from "../models/livro.model.js";
import Venda from "../models/venda.model.js";

async function insertVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (error) {
    throw error;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll();
  } catch (error) {
    throw error;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function getVendasByCliente(clienteId) {
  try {
    return Venda.findAll({
      include: [
        {
          model: Cliente,
          as: "cliente",
          where: { clienteId },
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendasByLivro(livroId) {
  try {
    return Venda.findAll({
      include: [
        {
          model: Livro,
          where: { livroId },
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function deleteVenda(id) {
  try {
    return await Venda.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateVenda(venda) {
  try {
    await Venda.update(venda, {
      where: {
        vendaId: venda.VendaId,
      },
    });
    return await getVenda(venda.vendaId);
  } catch (error) {
    throw error;
  }
}

export default {
  insertVenda,
  getVendas,
  getVenda,
  updateVenda,
  deleteVenda,
  getVendasByCliente,
  getVendasByLivro,
};
