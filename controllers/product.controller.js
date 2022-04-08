import ProductService from '../services/product.service.js';

async function createProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        'Name, description, value, stock e supplier_id são obrigatórios.'
      );
    }
    product = await ProductService.createProduct(product);
    res.send(product);
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getProducts());
    logger.info('GET /product');
  } catch (error) {
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await ProductService.getProduct(id));
    logger.info(`GET /product/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    let id = req.params.id;
    await ProductService.deleteProduct(id);
    res.end();
    logger.info(`DELETE /product/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        'Product_Id, Name, description, value, stock e supplier_id são obrigatórios.'
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
