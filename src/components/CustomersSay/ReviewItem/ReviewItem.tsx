'use client'

import Image from 'next/image'
import styles from './ReviewItem.module.scss'
import { motion } from 'framer-motion'
import QuotationMarks from '@/components/icons/QuotationMarks'
import Star from '@/components/icons/Star'
import { useEffect, useState } from 'react'

type ReviewType = {
    id: number
    name: string
    yearsWithUs: number
    photo: string
    text: string
    rating: number
}

const ReviewItem = ({ item, animHeight = 13.5 }: { item: ReviewType; animHeight?: number }) => {
    const [headerIsVisible, setHeaderIsVisible] = useState<boolean>(true)
    const [animate, setAnimate] = useState<any>({})

    useEffect(() => {
        let newAnimate = {...animate}
        if(animHeight > 13.5) { 
            newAnimate = {...newAnimate, ...{height: 'auto', opacity: 1, marginBottom: "30px", transitionDuration: 1000, dur: 1000}}
        } else {
            newAnimate = {...newAnimate, ...{height: 0, opacity: 0, marginBottom: 0, transitionDuration: 1000, dur: 1000}}
        }
        setAnimate(newAnimate)
    }, [animHeight])

    return (
        <motion.div
            className={styles.container}
            initial={{ height: `${animHeight}dvw` }}
            animate={{ height: `${animHeight}dvw` }}
        >
            <motion.div
                className={styles.header}
                style={headerIsVisible === false ? { display: 'none' } : {}}
                animate={animate}
            >
                <div className={styles.content}>
                    <img
                        src={item.photo}
                        alt=''
                        className={styles.photo}
                    />
                    <div className={styles.info}>
                        <p>{item.name}</p>
                        <p>{item.yearsWithUs} Year With Us</p>
                    </div>
                </div>
                <QuotationMarks />
            </motion.div>
            <p className={styles.review}>“{item.text}”</p>
            <div className={styles.rating}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
        </motion.div>
    )
}

export default ReviewItem
