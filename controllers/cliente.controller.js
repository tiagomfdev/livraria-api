import ClienteService from "../services/cliente.service.js";

async function createCliente(req, res, next) {
  try {
    const cliente = req.body;
    if (
      !cliente.nome ||
      !cliente.senha ||
      !cliente.email ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "Nome, Senha, E-mail, Telefone e Endereço são obrigatórios."
      );
    }

    res.send(await ClienteService.createCliente(cliente));
  } catch (error) {
    next(error);
  }
}

async function getClientes(req, res, next) {
  try {
    res.send(await ClienteService.getClientes());
  } catch (error) {
    next(error);
  }
}

async function getCliente(req, res, next) {
  try {
    res.send(await ClienteService.getCliente(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function deleteCliente(req, res, next) {
  try {
    res.send(await ClienteService.deleteCliente(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.cliente_id ||
      !cliente.nome ||
      !cliente.senha ||
      !cliente.email ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "ID, Nome, Senha, E-mail, Telefone e Endereço são obrigatórios."
      );
    }

    cliente = await ClienteService.updateCliente(cliente);
    res.send(cliente);
  } catch (error) {
    next(error);
  }
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
