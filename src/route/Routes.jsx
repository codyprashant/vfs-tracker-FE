import VFSDashboard from '../components/dashboard/indnld/index'

export const routes = [
        { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout/`, Component: <VFSDashboard /> },

]