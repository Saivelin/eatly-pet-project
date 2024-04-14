'use client'

import { DeliverStatuses, DishOrder } from '@/types/dishes'
import styles from './DishOrderItem.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DishOrderItem = ({ item }: { item: DishOrder }) => {
    return (
        <motion.div className={styles.container} initial={{position: "relative", zIndex: 1, boxShadow: "20px 20px 50px rgba(0, 0, 0, 0)"}} whileHover={{boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.374)"}}>
            <Image
                className={styles.photo}
                alt=''
                src={item.photo}
                fill
            />
            <div className={styles.content}>
                <h5>{item.title}</h5>
                <p style={item.deliverStatus == DeliverStatuses.Canceled ? { color: 'red' } : {}}>
                    {item.deliverStatus}
                </p>
            </div>
            <p className={styles.dateOfDeliver}>{item.dateOfDeliver}</p>
        </motion.div>
    )
}

export default DishOrderItem
