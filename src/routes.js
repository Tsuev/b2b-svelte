import Main from './routes/Main.svelte'
import Catalog from './routes/Catalog.svelte'
import Cart from './routes/Cart.svelte'
import Order from './routes/Order.svelte'
import Profile from './routes/Profile.svelte'
import Error from './routes/Error.svelte'

const routes =  [
    {
        name: '/',
        component: Main
    },
    {
        name: 'catalog:id',
        component: Catalog
    },
    {
        name: 'cart',
        component: Cart
    },
    {
        name: 'order',
        component: Order
    },
    {
        name: 'profile',
        component: Profile
    },
    {
        name: '404',
        path: '404',
        component: Error
    }
]

export { routes }