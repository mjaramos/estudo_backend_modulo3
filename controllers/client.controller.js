import ClientService from '../services/client.service.js';

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error('Name, cpf, phone, email e address são obrigatórios.');
    }
    client = await ClientService.createClient(client);
    res.send(client);
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info('GET /client');
  } catch (error) {
    next(error);
  }
}

async function getClient(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await ClientService.getClient(id));
    logger.info(`GET /client/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req, res, next) {
  try {
    let id = req.params.id;
    await ClientService.deleteClient(id);
    res.end();
    logger.info(`DELETE /client/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.client_id ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        'Client_Id, Name, cpf, phone, email e address são obrigatórios.'
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
