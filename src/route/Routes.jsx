import VFSDashboard from '../components/dashboard/ecommerce/index'

export const routes = [
        { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout/`, Component: <VFSDashboard /> },

]