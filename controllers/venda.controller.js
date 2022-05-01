import VendaService from "../services/venda.service.js";

async function createVenda(req, res, next) {
  try {
    let venda = req.body;

    //VendaService
    venda = await VendaService.createVenda(venda);
    res.send(venda);
  } catch (error) {
    next(error);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(await VendaService.getVendas());
  } catch (error) {
    next(error);
  }
}
async function getVenda(req, res, next) {
  try {
    res.send(await VendaService.getVenda(req.params.id));
  } catch (error) {
    next(error);
  }
}
async function deleteVenda(req, res, next) {
  try {
    await VendaService.deleteVenda(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}
/**
 * O endpoint não deve permitir que o nome e autor do venda sejam
 * alterados, evitando assim possíveis inconsistências
 */
async function updateVenda(req, res, next) {
  try {
    let venda = req.body;

    //VendaService
    venda = await VendaService.updateVenda(venda);
    res.send(venda);
  } catch (error) {
    next(error);
  }
}

export default {
  createVenda,
  getVendas,
  getVenda,
  deleteVenda,
  updateVenda,
};
