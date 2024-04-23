import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner'
import { FeatureType, RateType } from '../types'
import styles from './Table.module.scss'

const Includes = () => (
    <svg
        width='35'
        height='35'
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <circle
            cx='17.5'
            cy='17.5'
            r='17.5'
            fill='#6C5FBC'
        />
        <path
            d='M10 17.3333L15.3333 22.6667L26 12'
            stroke='#F9F9F9'
            stroke-width='3.675'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
)

const NotIncludes = () => (
    <svg
        width='35'
        height='35'
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <circle
            cx='17.5002'
            cy='17.5'
            r='17.5'
            fill='#EB3F5E'
        />
        <path
            d='M11.6718 25.0056C11.2469 25.0056 10.822 24.8491 10.4866 24.5136C9.83812 23.8651 9.83812 22.7918 10.4866 22.1433L23.1435 9.48637C23.792 8.83788 24.8654 8.83788 25.5139 9.48637C26.1624 10.1349 26.1624 11.2082 25.5139 11.8567L12.857 24.5136C12.5439 24.8491 12.0967 25.0056 11.6718 25.0056Z'
            fill='#F9F9F9'
        />
        <path
            d='M24.3287 25.0056C23.9038 25.0056 23.4789 24.8491 23.1435 24.5136L10.4866 11.8567C9.83812 11.2082 9.83812 10.1349 10.4866 9.48637C11.1351 8.83788 12.2085 8.83788 12.857 9.48637L25.5139 22.1433C26.1624 22.7918 26.1624 23.8651 25.5139 24.5136C25.1784 24.8491 24.7536 25.0056 24.3287 25.0056Z'
            fill='#F9F9F9'
        />
    </svg>
)

const Table = ({ rates, features }: { rates: RateType[]; features: FeatureType[] }) => {
    return (
        <div className={styles.container}>
            {rates && rates?.length && rates.length > 0 ? (
                // rates.map(el => (
                <>
                    <div className={styles.row}>
                        {rates.map(el => (
                            <div className={styles.rateMain}>
                                <h5 className={styles.header}>{el?.title}</h5>
                                <p className={styles.subtitle}>{el?.subtitle}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.row}>
                        {rates.map(el => (
                            <div className={styles.ratePricing}>
                                <p className={styles.price}>
                                    <span className={styles.priceCurrency}>$</span>
                                    {el?.pricePerMonth}
                                    <span className={styles.priceInfo}>/month</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* <div className={styles.row}>
                            <div className={styles.ratePricing}>
                                <p className={styles.price}>
                                    <span className={styles.priceCurrency}>$</span>
                                    {el?.pricePerMonth}
                                    <span className={styles.priceInfo}>/month</span>
                                </p>
                            </div>
                        </div>
                        {features && features?.length && features.length > 0 ? (
                            features.map(feature => (
                                <div className={styles.row}>
                                    {el.features.includes(feature.id) ? <Includes /> : <NotIncludes />}
                                </div>
                            ))
                        ) : (
                            <LoadingSpinner />
                        )} */}
                </>
            ) : (
                // ))
                <LoadingSpinner />
            )}
        </div>
    )
}

export default Table
