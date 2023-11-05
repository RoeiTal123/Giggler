// import {
//     Chart as ChartJS, ArcElement, LinearScale, BarElement, CategoryScale
//     , LineController, LineElement, PointElement, Tooltip, Legend, Filler
// } from 'chart.js'
// ChartJS.register(ArcElement, CategoryScale, LineController, LinearScale
//     , LineElement, PointElement, BarElement, Tooltip, Legend, Filler)
const noResultsImg = 'https://res.cloudinary.com/digrqdbso/image/upload/v1699099661/Giggler/home-page-other/h4ramvmiu3q4c6skzd26.png'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Loader } from '../cmps/Loader.jsx'
import { SellerOrders } from '../cmps/dashboardCmps/SellerOrders.jsx'

import { loadOrders } from '../store/order.actions.js'

export function DashboardPage() {
    const dispatch = useDispatch()

    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const isLoading = useSelector(storeState => storeState.orderModule.isLoading)

    useEffect(() => {
        if (user) {
            dispatch(loadOrders({ sellerId: user._id }))
        }
    }, [user, dispatch])

    const displayedOrders = orders.filter(order => order.sellerId === user._id)
    
    if (isLoading) return <Loader />

    if (displayedOrders.length === 0) {
        return (
            <main className="dashboard-page full flex column">
                <div className='no-results'>
                    <h3>Whoops, looks like you don't have any orders yet.</h3>
                    <p>Please check again once your gigs gain traction.</p>
                    <img src={noResultsImg} alt="no results" />
                    <p>At the meantime, why not refine your profile or check out tips for success?</p>
                    <Link to={`/user/${user._id}`}>Go to Profile</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="dashboard-page full flex column">
            <section className='dashboard-container'>
                <h3>Your Orders</h3>
                <SellerOrders
                    user={user}
                    displayedOrders={displayedOrders}
                />
            </section>
        </main>
    )
}