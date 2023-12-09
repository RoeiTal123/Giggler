import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { DenialOrderModal } from "./DenialOrderModal.jsx"

import { orderService } from '../../services/order.service.js'
import { gigService } from '../../services/gig.service.js'

export function SellerOrder({ order, acceptOrder, denyOrder, completeOrder, deviceType }) {
    const [isDenied, setDenial] = useState(false)
    const [gigData, setGigData] = useState(null)
    const [userData, setUserData] = useState(null)
    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const dropdownMenuRef = useRef(null)

    async function fetchOrderDetails() {
        try {
            const orderDetails = await orderService.getOrderDetails(order._id, 'buyer')
            setUserData({
                username: orderDetails.userData.username,
                firstName: orderDetails.userData.fullName.split(' ')[0],
                lastName: orderDetails.userData.fullName.split(' ')[1] || '',
                avatar: orderDetails.userData.imgUrl,
                _id: orderDetails.userData._id
            })
            const gig = await gigService.getById(order.orderedGigId)
            const firstImgUrl = gig.imgUrls[0]

            setGigData({ ...gig, firstImgUrl })
        } catch (err) {
            console.error('Failed to fetch order or gig details:', err)
        }
    }

    useEffect(() => {
        fetchOrderDetails()
    }, [order])

    useEffect(() => {
        function handleDropdownClick(event) {
            if (dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)) {
                setDropdownVisible(false)
            }
        }
        document.addEventListener('mousedown', handleDropdownClick)
        return () => {
            document.removeEventListener('mousedown', handleDropdownClick)
        }
    }, [])

    function getAvailableActions(order) {
        let actions = []
        if (order.orderState === 'pending') {
            actions = [
                { label: 'Accept', action: () => acceptOrder(order) },
                { label: 'Deny', action: () => setDenial(true) }
            ]
        }
        if (order.orderState === 'accepted') {
            actions = [
                { label: 'Complete', action: () => completeOrder(order) }
            ]
        }
        return actions
    }
    const { prefix, dateStr } = orderService.getActionDate(order)

    return (
        deviceType === 'tablet' || deviceType === 'desktop' ? (
            <div className={`order-contents flex row ${orderService.getOrderClass(order.orderState)}`}>
                {gigData ? (
                    <div className="order-info flex row">
                        <img src={gigData && gigData.firstImgUrl} alt="gig-img" />
                        <Link to={`/gig/${gigData._id}`}>{gigData.title}</Link>
                    </div>
                ) : null}
                {userData && (
                    <div className="order-buyer flex row">
                        <img src={userData.avatar} alt="buyer-img" className="buyer-avatar" />
                        <Link to={`/user/${userData._id}`} className="buyer-name flex column">
                            <span className='first-name'>{`${userData.firstName}`}</span>
                            <span className='last-name'>{`${userData.lastName}`}</span>
                        </Link>
                    </div>
                )}
                <div className="order-date flex row">
                    <div className='text flex column'>
                        <span className="prefix">{prefix}</span>
                        <span className="date">{dateStr}</span>
                    </div>
                </div>
                <div className="order-price">
                    {`$${order.price}`}
                </div>
                <div className="order-state-dropdown flex column">
                    <span
                        className={order.orderState}
                        onClick={() => {
                            if (getAvailableActions(order).length > 0) {
                                setDropdownVisible(!isDropdownVisible)
                            }
                        }}
                    >
                        {order.orderState}
                    </span>
                    {isDropdownVisible && getAvailableActions(order).length > 0 && (
                        <div ref={dropdownMenuRef} className="dropdown-menu flex column">
                            {getAvailableActions(order).map((action, idx) => (
                                <button
                                    key={idx}
                                    onClick={action.action}
                                    className={`dropdown-action ${action.label}`}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {isDenied && (
                    <DenialOrderModal
                        order={order}
                        denyOrder={(order, reason) => {
                            if (order) denyOrder(order, reason)
                            setDenial(false)
                        }}
                    />
                )}
            </div>
        ) : (
            <div className={`order-contents grid ${orderService.getOrderClass(order.orderState)}`}>
                <img src={gigData && gigData.firstImgUrl} alt="gig-img" className="order-image" />
                <div className="order-price">
                    {`$${order.price}`}
                </div>
                <div className="order-title">
                    {gigData ? (
                        <Link to={`/gig/${gigData._id}`}>{gigData.title}</Link>
                    ) : null}
                </div>
                {userData && (
                    <div className="order-buyer flex row">
                        <img src={userData.avatar} alt="buyer-img" className="buyer-avatar" />
                        <Link to={`/user/${userData._id}`} className="buyer-name flex row">
                            {`@${userData.username}`}
                        </Link>
                    </div>
                )}
                <div className="order-date flex row">
                    <div className='text flex column'>
                        <span className="prefix">{prefix}</span>
                        <span className="date">{dateStr}</span>
                    </div>
                </div>
                <div className="order-state-dropdown flex column">
                    <span
                        className={order.orderState}
                        onClick={() => {
                            if (getAvailableActions(order).length > 0) {
                                setDropdownVisible(!isDropdownVisible)
                            }
                        }}
                    >
                        {order.orderState}
                    </span>
                    {isDropdownVisible && getAvailableActions(order).length > 0 && (
                        <div ref={dropdownMenuRef} className="dropdown-menu flex row">
                            {getAvailableActions(order).map((action, idx) => (
                                <button
                                    key={idx}
                                    onClick={action.action}
                                    className={`dropdown-action ${action.label}`}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {isDenied && (
                    <DenialOrderModal
                        order={order}
                        denyOrder={(order, reason) => {
                            if (order) denyOrder(order, reason)
                            setDenial(false)
                        }}
                    />
                )}
            </div>
        )
    )
}