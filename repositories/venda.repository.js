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
};
