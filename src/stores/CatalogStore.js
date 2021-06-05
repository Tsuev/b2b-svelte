import { writable } from "svelte/store";

export const tree = writable([
    {
        id: 0, 
        title: 'Smeg',
        child:[
            {
                id: 5, 
                title: 'Духовые шкафы',
                link: '/1' 
            }
        ]
    },
    {
        id: 1, 
        title: 'Korting', 
        child:[
            {
                id: 3, 
                title: 'Газовая плита',
                child: [
                    {
                        id: 4, 
                        title: 'FH-100',
                        link: '/1'
                    }
                ] 
            }
        ]
    },
    {
        id: 2, 
        title: 'Omoikiri', 
        link: '/1'
    },
])