import { DeliverType } from '@/components/DeliverCard/DeliverCard'

export const MAP_LOCATION = {
    duration: 500,
    center: [76.759933, 55.307863],
    zoom: 5.4
}

export const MAP_CAMERA = { tilt: 0 }

export const enum ZoomDirection {
    Increase = 'increase',
    Decrease = 'decrease'
}

export const MAP_CUSTOMIZATION = [
    {
        tags: {
            any: ['water']
        },
        elements: ['label'],
        stylers: [
            {
                opacity: 0
            }
        ]
    },
    {
        tags: {
            any: ['landscape', 'land', 'landcover', 'urban_area', 'national_park', 'terrain']
        },

        elements: 'geometry',
        stylers: [
            {
                color: '#F0F2F9'
            }
        ]
    },
    {
        tags: {
            any: ['transit']
        },
        elements: ['geometry', 'label'],
        stylers: [
            {
                opacyty: 0
            }
        ]
    },

    {
        tags: {
            any: ['admin', 'country', 'locality', 'district', 'address']
        },
        elements: 'label.text.fill',
        stylers: [
            {
                color: '#49527A'
            }
        ]
    },
    {
        tags: {
            any: ['admin']
        },
        elements: 'geometry',
        stylers: [
            {
                color: '#F0F2F9'
            }
        ]
    },
    {
        tags: {
            any: ['road', 'water']
        },
        elements: 'geometry',
        stylers: [
            {
                color: '#FDFDFE'
            }
        ]
    },

    {
        tags: {
            any: ['poi', 'transit']
        },
        elements: ['geometry', 'label'],
        stylers: [
            {
                opacity: 0
            }
        ]
    },
    {
        tags: {
            any: ['road']
        },
        elements: 'label.icon',
        stylers: [
            {
                opacity: 0
            }
        ]
    }
]

export const Deliveryman = {
    name: 'Alex',
    surname: 'Smith',
    photo: 'https://placehold.co/500x500'
}

export const DeliverInfo: DeliverType = {
    deliverMan: Deliveryman,
    time: 15 * 60,
    address: 'Нижний Новгород, Проспект Гагарина 6'
}
