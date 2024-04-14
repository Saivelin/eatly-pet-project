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
            {item?.tags && item?.tags?.length && item?.tags?.length > 0 ? (
                <div className={styles.tags}>
                    {item?.tags.map(el => (
                        <Tag
                            tag={el}
                            key={el.id}
                        />
                    ))}
                </div>
            ) : null}
            <h3 className={styles.header}>{item.title}</h3>
            <p className={styles.deliveryTime}>
                {getTime(item.time).hours > 0 ? (
                    <span className={styles.hours}>{getTime(item.time).hours}hrs </span>
                ) : null}
                <span className={styles.mins}>{getTime(item.time).minutes}min • </span>
                <Star />
                <span className={styles.rating}> {item.rating}</span>
            </p>
            <p className={styles.cost}>
                <p>
                    <span>${String(item.cost).split('.')[0]}</span>
                    {String(item.cost).split('.')[1] ? <span>.{String(item.cost).split('.')[1]}</span> : null}
                </p>
                <svg
                    width='45'
                    height='40'
                    viewBox='0 0 45 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect
                        x='0.587891'
                        y='0.284668'
                        width='43.8299'
                        height='39.7208'
                        rx='8.93034'
                        fill='#323142'
                    />
                    <mask
                        id='path-2-inside-1_1_16609'
                        fill='white'
                    >
                        <path d='M29.4644 21.3612H23.1248V27.7901H20.595V21.3612H14.2852V19.0695H20.595V12.6108H23.1248V19.0695H29.4644V21.3612Z' />
                    </mask>
                    <path
                        d='M29.4644 21.3612H23.1248V27.7901H20.595V21.3612H14.2852V19.0695H20.595V12.6108H23.1248V19.0695H29.4644V21.3612Z'
                        fill='black'
                    />
                    <path
                        d='M29.4644 21.3612V25.4703H33.5735V21.3612H29.4644ZM23.1248 21.3612V17.2522H19.0158V21.3612H23.1248ZM23.1248 27.7901V31.8991H27.2339V27.7901H23.1248ZM20.595 27.7901H16.4859V31.8991H20.595V27.7901ZM20.595 21.3612H24.704V17.2522H20.595V21.3612ZM14.2852 21.3612H10.1761V25.4703H14.2852V21.3612ZM14.2852 19.0695V14.9604H10.1761V19.0695H14.2852ZM20.595 19.0695V23.1785H24.704V19.0695H20.595ZM20.595 12.6108V8.50179H16.4859V12.6108H20.595ZM23.1248 12.6108H27.2339V8.50179H23.1248V12.6108ZM23.1248 19.0695H19.0158V23.1785H23.1248V19.0695ZM29.4644 19.0695H33.5735V14.9604H29.4644V19.0695ZM29.4644 17.2522H23.1248V25.4703H29.4644V17.2522ZM19.0158 21.3612V27.7901H27.2339V21.3612H19.0158ZM23.1248 23.681H20.595V31.8991H23.1248V23.681ZM24.704 27.7901V21.3612H16.4859V27.7901H24.704ZM20.595 17.2522H14.2852V25.4703H20.595V17.2522ZM18.3942 21.3612V19.0695H10.1761V21.3612H18.3942ZM14.2852 23.1785H20.595V14.9604H14.2852V23.1785ZM24.704 19.0695V12.6108H16.4859V19.0695H24.704ZM20.595 16.7199H23.1248V8.50179H20.595V16.7199ZM19.0158 12.6108V19.0695H27.2339V12.6108H19.0158ZM23.1248 23.1785H29.4644V14.9604H23.1248V23.1785ZM25.3553 19.0695V21.3612H33.5735V19.0695H25.3553Z'
                        fill='white'
                        mask='url(#path-2-inside-1_1_16609)'
                    />
                </svg>
            </p>
        </div>
    )
}

export default DishesCard
