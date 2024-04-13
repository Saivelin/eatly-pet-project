import { Dish } from '@/types/dishes'
import styles from './DishesCard.module.scss'
import { useCallback } from 'react'
import Image from 'next/image'
import Tag from '../Tag/Tag'
import Star from '../icons/Star'
import Bookmark from '../icons/Bookmark'

const DishesCard = ({ item }: { item: Dish }) => {
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
        <div className={styles.container}>
            <Image
                src={item.photo}
                alt=''
                className={styles.photo}
                fill
            />
            {
                item?.tags && item?.tags?.length && item?.tags?.length > 0 ? 
                <div className={styles.tags}>
                    {item?.tags.map((el)=>(
                        <Tag tag={el} key={el.id}/>
                    ))}
                </div>
                : null
            }
            <h3>{item.title}</h3>
            <p className={styles.deliveryTime}>
                {getTime(item.time).hours > 0 ? (
                    <span className={styles.hours}>{getTime(item.time).hours}hrs </span>
                ) : null}
                <span className={styles.mins}>{getTime(item.time).minutes}min • </span>
                <Star />
                <span className={styles.rating}> {item.rating}</span>
            </p>
        </div>
    )
}

export default DishesCard
