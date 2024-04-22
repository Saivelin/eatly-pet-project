'use client'

import { YMap, YMapComponentsProvider, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } from 'ymap3-components'
import { DeliverInfo, MAP_CAMERA, MAP_CUSTOMIZATION, MAP_LOCATION } from './Map.constants'
import styles from './MapYandex.module.scss'
import DeliverCard from '@/components/DeliverCard/DeliverCard'

const MapYandex = () => {
    return (
        <>
            <div className={styles.map}>
                <YMapComponentsProvider
                    apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ? process.env.NEXT_PUBLIC_YMAPS_API_KEY : ''}
                >
                    <YMap
                        location={MAP_LOCATION}
                        mode='vector'
                        camera={MAP_CAMERA}
                    >
                        <YMapDefaultSchemeLayer
                            visible
                            customization={MAP_CUSTOMIZATION}
                        />
                        <YMapDefaultFeaturesLayer />
                    </YMap>
                </YMapComponentsProvider>
            </div>
            <DeliverCard
                deliver={DeliverInfo}
                classNames={[styles.deliverInfo]}
            />
        </>
    )
}

export default MapYandex
