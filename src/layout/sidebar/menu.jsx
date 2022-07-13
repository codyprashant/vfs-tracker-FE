import { Home } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'Slot Dashboards',
        menucontent: 'Slots country basis',
        Items: [
            // {
            //     title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
            //         { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'IND-NLD Slots', type: 'link' },
            //         { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Mar-Prt Slots', type: 'link' },
            //     ]
            // },
            { path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Home, title: 'India-Netherland', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/dashboard/marprt`, icon: Home, title: 'Morocco-Portugal', type: 'link' },
        ]

    }


]