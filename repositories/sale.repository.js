import Sale from '../models/sale.model.js';
import Product from '../models/product.model.js';
import Client from '../models/client.model.js';

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (error) {}
}

async function getSales() {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Client,
        },
      ],
    });
  } catch (error) {}
}

async function getSalesByProductId(productId) {
  try {
    return await Sale.findAll({
      where: {
        productId,
      },
    });
  } catch (error) {}
}

async function getSalesBySupplierId(supplierId) {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
          where: {
            supplierId,
          },
        },
      ],
    });
  } catch (error) {}
}

async function getSale(id) {
  try {
    return await Sale.findByPk(id);
  } catch (error) {}
}

async function deleteSale(id) {
  try {
    await Sale.destroy({
      where: {
        saleId: id,
      },
    });
  } catch (error) {}
}

async function updateSale(sale) {
  try {
    await Sale.update(
      {
        value: sale.value,
        date: sale.date,
        clientId: sale.clientId,
      },
      {
        where: {
          saleId: sale.saleId,
        },
      }
    );
    return await getSale(sale.saleId);
  } catch (error) {}
}

export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  getSalesByProductId,
  getSalesBySupplierId,
};
