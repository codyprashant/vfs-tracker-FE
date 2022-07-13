import VFSDashboard from '../components/dashboard/indnld/index'
import MarPrtDashboard from '../components/dashboard/marprt/index'

export const routes = [
        { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout/`, Component: <VFSDashboard /> },
        { path: `${process.env.PUBLIC_URL}/dashboard/marprt/:layout/`, Component: <MarPrtDashboard /> },

]