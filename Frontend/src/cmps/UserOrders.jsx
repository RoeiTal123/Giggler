import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { UserOrder } from './UserOrder.jsx'

import { loadOrders } from '../store/order.actions.js'

import { orderBackendService } from '../services/order.backend.service.js'
import { userService } from '../services/user.service.js'

export function UserOrders() {
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    var sellerOrders = orders.filter((order) => order.sellerId === user._id)
    var userOrders = orders.filter((order) => (order.buyerId === user._id) && (order.orderState !== 'pending'))

    useEffect(() => {
        loadTheOrders()
    }, [])

    async function loadTheOrders() {
        try {
            await loadOrders()
        } catch (err) {
            console.log('couldnt load orders : ', err)
        }
    }

    function acceptOrder(order) {
        console.log(`order ${order._id} accepted`)
        order.orderState = 'accepted'
        order.acceptedAt = Date.now()
        var updatedUser = { ...user }
        updatedUser.lastDelivery = Date.now()
        userService.update(updatedUser)
        orderBackendService.save(order)
    }

    function denyOrder(order, reason) {
        console.log(`order ${order._id} denied`)
        const newOrder = { ...order }
        newOrder.orderState = 'denied'
        newOrder.deniedAt = Date.now()
        var updatedUser = { ...user }
        updatedUser.lastDelivery = Date.now()
        userService.update(updatedUser)
        newOrder.reasonForDenial = reason
        orderBackendService.save(newOrder)
    }

    if (orders.length === 0) return <div>loading... </div>

    return (
        <section className="user-orders">
            <ul className='orders'>
                <div className='orders-title'>
                    Active Orders
                </div>
                {sellerOrders.map((order) =>
                    <li key={order._id}>
                        <UserOrder order={order} acceptOrder={acceptOrder} denyOrder={denyOrder} />
                    </li>
                )}
            </ul>
            <ul className='orders'>
                <div className='orders-title'>
                    Recieved Orders
                </div>
                {userOrders.map((order) =>
                    <li key={order._id}>
                        <UserOrder order={order} acceptOrder={acceptOrder} denyOrder={denyOrder} />
                    </li>
                )}
            </ul>
        </section>
    )
}