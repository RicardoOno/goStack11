import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

// const transactionsRepository = new TransactionsRepository();
/**
 * [] Retornar listagem com todas as transações
 * [] Add valor total de entradas, retiradas e total de crédito
 */
transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
/**
 * [] Rota deve receber title, value e type, sendo type: income (deposito) e outcome (saques)
 * [] Salvar a transação
 */
transactionRouter.post('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
