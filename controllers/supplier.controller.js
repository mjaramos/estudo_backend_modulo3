import SupplierService from '../services/supplier.service.js';

async function createSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error('Name, cnpj, phone, email e address são obrigatórios.');
    }
    supplier = await SupplierService.createSupplier(supplier);
    res.send(supplier);
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await SupplierService.getSuppliers());
    logger.info('GET /supplier');
  } catch (error) {
    next(error);
  }
}

async function getSupplier(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await SupplierService.getSupplier(id));
    logger.info(`GET /supplier/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    let id = req.params.id;
    await SupplierService.deleteSupplier(id);
    res.end();
    logger.info(`DELETE /supplier/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function updateSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.supplierId ||
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        'Supplier_Id, Name, cnpj, phone, email e address são obrigatórios.'
      );
    }
    supplier = await SupplierService.updateSupplier(supplier);
    res.send(supplier);
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
