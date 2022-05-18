import {Router} from 'express';

const getOrders = async (req, res) => {
    // TODO implement
};
const getOrder = async (req, res) => {
    // TODO implement
    const number = req.params.number;
    res.send(number);
};
const createOrder = async (req, res) => {
    // TODO implement
};
const updateOrder = async (req, res) => {
    // TODO implement
};
const archiveOrder = async (req, res) => {
// TODO implement
}

const orderRouter = Router();
orderRouter.get('/', getOrders);
orderRouter.get('/:number', getOrder);
orderRouter.post('/', createOrder);
orderRouter.put('/', updateOrder);
orderRouter.delete('/:number', archiveOrder);

export {orderRouter};