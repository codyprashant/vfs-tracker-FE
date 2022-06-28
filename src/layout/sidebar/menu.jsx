import { Home } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'Slot Dashboards',
        menucontent: 'Slots country basis',
        Items: [
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'IND-NLD Slots', type: 'link' },
                ]
            }
        ]

    }


]