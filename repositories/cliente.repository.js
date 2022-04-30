import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
  try {
    return await Cliente.create(cliente);
  } catch (error) {
    throw error;
  }
}

async function getClientes() {
  try {
    return Cliente.findAll();
  } catch (error) {
    throw error;
  }
}

async function getCliente(id) {
  try {
    return await Cliente.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function updateCliente(cliente) {
  try {
    await Cliente.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });

    return await getCliente(cliente.clienteId);
  } catch (error) {
    throw error;
  }
}

async function deleteCliente(id) {
  try {
    await Cliente.destroy({
      where: {
        clienteId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente,
};
