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
    logger.info(`DELETE /product/:{id}`);
    res.end();
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
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
    res.send(product);
  } catch (error) {
    next(error);
  }
}

async function createProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error('Product Id é obrigatório');
    }
    await ProductService.createProductInfo(productInfo);
    logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function updateProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error('Product id é obrigatório');
    }
    await ProductService.updateProductInfo(productInfo);
    logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function createReview(req, res, next) {
  try {
    let params = req.body;
    if (!params.productId || !params.review) {
      throw new Error('Product id e Review são obrigatórios.');
    }
    await ProductService.createReview(params.review, params.productId);
    logger.info(`POST /product/review - ${JSON.stringify(params)}`);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function deleteReview(req, res, next) {
  try {
    await ProductService.deleteReview(req.params.id, req.params.index);
    logger.info(`DELETE /product/:id/review/:index`);
    res.end();
  } catch (error) {
    next(error);
  }
}

async function getProductsInfo(req, res, next) {
  try {
    res.send(await ProductService.getProductsInfo());
    logger.info('GET /product/info');
  } catch (error) {
    next(error);
  }
}

async function deleteProductInfo(req, res, next) {
  try {
    res.send(await ProductService.deleteProductInfo(req.params.id));
    logger.info('DELETE /product/info/:id');
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
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo,
};
