'use client'

import { useEffect, useRef, useState } from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import styles from './ReviewsSlider.module.scss'
import { motion } from 'framer-motion'

const reviews = [
    {
        id: 1,
        name: "Alexander R.",
        yearsWithUs: 1,
        // photo: string
        // text: string
        // rating: number
    },
    {
        id: 2,
        title: 'fsdf'
    },
    {
        id: 3,
        title: 'fsdf'
    },
    {
        id: 4,
        title: 'fsdf'
    },
    {
        id: 5,
        title: 'fsdf'
    }
]

const ReviewsSlider = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<any>(null)

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.carousel}
                ref={carousel}
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className={styles.inner_carousel}
                >
                    {reviews.map((el, i) => (
                        <motion.div
                            className={styles.item}
                            key={i}
                        >
                            {/* <ReviewItem
                                key={i}
                                item={el}
                            /> */}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ReviewsSlider
