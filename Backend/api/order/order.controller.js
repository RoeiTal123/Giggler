import { orderService } from './order.service'
import { loggerService } from '../../services/logger.service.js'

export async function getOrder(req, res) {
    try {
        const order = await orderService.getById(req.params.id)
        res.send(order)
    } catch (err) {
        loggerService.error('Failed to get order', err)
        res.status(500).send({ err: 'Failed to get order' })
    }
}

export async function getOrders(req, res) {
    try {
        const filterBy = {
            txt: req.query?.txt || '',
            minBalance: +req.query?.minBalance || 0
        }
        const orders = await orderService.query(filterBy)
        res.send(orders)
    } catch (err) {
        loggerService.error('Failed to get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }
}

export async function deleteOrder(req, res) {
    try {
        await orderService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        loggerService.error('Failed to delete order', err)
        res.status(500).send({ err: 'Failed to delete order' })
    }
}

export async function updateOrder(req, res) {
    try {
        const order = req.body
        const savedOrder = await orderService.update(order)
        res.send(savedOrder)
    } catch (err) {
        loggerService.error('Failed to update order', err)
        res.status(500).send({ err: 'Failed to update order' })
    }
}