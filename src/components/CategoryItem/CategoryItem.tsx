'use client'

import { motion } from "framer-motion"
import { Category } from '@/types/dishes'
import styles from './CategoryItem.module.scss'
import Image from 'next/image'

const CategoryItem = ({ item }: { item: Category }) => {
    return (
        <motion.div
            whileHover={{scale: 1.2}}
            className={styles.container}
            style={{ backgroundColor: 'rgba' + (item.color.split(')')[0] + ', 0.2)').split('rgb')[1] }}
        >
            <div className={styles.content}>
                <div className={styles.icon}>
                    {typeof item.icon !== 'string' ? (
                        item.icon
                    ) : (
                        <Image
                            src={item.icon}
                            alt=''
                            fill
                        />
                    )}
                </div>
                <p
                    className={styles.header}
                    style={{ color: item.color }}
                >
                    {item.title}
                </p>
            </div>
        </motion.div>
    )
}

export default CategoryItem
