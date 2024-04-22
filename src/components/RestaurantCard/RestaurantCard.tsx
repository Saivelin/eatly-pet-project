import { RestaurantCardType } from '@/types/restaurant'
import styles from './RestaurantCard.module.scss'
import Image from 'next/image'
import { useCallback } from 'react'
import Tag from '../Tag/Tag'
import Star from '../icons/Star'
import Bookmark from '../icons/Bookmark'

const RestaurantCard = ({
    item,
    classNames = [''],
    inlineAbout = false,
    withTags = true
}: {
    item: RestaurantCardType
    classNames?: string[]
    inlineAbout?: boolean
    withTags?: boolean
}) => {
    const getTime = useCallback(
        (time: number) => {
            let hours = 0
            let minutes = 0

            hours = Number((time / 3600).toFixed(0))

            minutes = Number((time - hours * 3600) / 60)

            return { hours: hours, minutes: minutes }
        },
        [item]
    )

    return (
        <div
            className={`${styles.container} ${classNames.map(el => {
                return `${el} `
            })}`}
        >
            <div className={styles.photoWrapper}>
                <Image
                    src={item.photo}
                    alt=''
                    fill
                    className={styles.photo}
                />
            </div>
            <div className={styles.content}>
                {withTags === true ? (
                    <div className={styles.tagsWrapper}>
                        {item?.tags && item?.tags?.length && item?.tags?.length > 0
                            ? item.tags.map(el => (
                                  <Tag
                                      tag={el}
                                      key={el.id}
                                  />
                              ))
                            : null}
                    </div>
                ) : null}
                {inlineAbout === false ? <h3 className={styles.header}>{item.title}</h3> : null}
                <p className={`${styles.deliveryTime} ${inlineAbout === true ? styles.deliveryTime_inline : ''}`}>
                    {inlineAbout === true ? <h3 className={styles.header}>{item.title}</h3> : null}
                    {inlineAbout === true ? (
                        <div className={styles.info}>
                            {getTime(item.deliveryDuration).hours > 0 ? (
                                <span className={styles.hours}>{getTime(item.deliveryDuration).hours}hrs </span>
                            ) : null}
                            <span className={styles.mins}>{getTime(item.deliveryDuration).minutes}min • </span>
                            <Star />
                            <span className={styles.rating}> {item.rating}</span>
                        </div>
                    ) : (
                        <>
                            {getTime(item.deliveryDuration).hours > 0 ? (
                                <span className={styles.hours}>{getTime(item.deliveryDuration).hours}hrs </span>
                            ) : null}
                            <span className={styles.mins}>{getTime(item.deliveryDuration).minutes}min • </span>
                            <Star />
                            <span className={styles.rating}> {item.rating}</span>
                        </>
                    )}

                    <Bookmark />
                </p>
            </div>
        </div>
    )
}

export default RestaurantCard
