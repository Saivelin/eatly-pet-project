'use client'

import { DishCart } from '@/types/dishes'
import Image from 'next/image'
import styles from './CartItem.module.scss'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const PrimaryBtn = () => (
    <div>
        <svg
            width='13'
            height='3'
            viewBox='0 0 13 3'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <line
                x1='1.59259'
                y1='1.72064'
                x2='12.0584'
                y2='1.72064'
                stroke='#323142'
                stroke-width='1.64857'
                stroke-linecap='round'
            />
        </svg>
    </div>
)

const SecondaryBtn = () => (
    <div>
        <svg
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <line
                x1='6.66046'
                y1='1.00592'
                x2='6.66046'
                y2='10.8112'
                stroke='white'
                stroke-width='1.64857'
                stroke-linecap='round'
            />
            <line
                x1='1.27692'
                y1='5.72064'
                x2='11.7427'
                y2='5.72064'
                stroke='white'
                stroke-width='1.64857'
                stroke-linecap='round'
            />
        </svg>
    </div>
)

const CartItem = ({ item }: { item: DishCart }) => {
    const [count, setCount] = useState<number>(1)

    useEffect(() => {
        setCount(item?.count)
    }, [])

    return (
        <div className={styles.container}>
            <Image
                src={item.photo}
                alt=''
                fill
                className={styles.photo}
            />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.cost}>${item.cost}</p>
                </div>
                <div className={styles.dynamic}>
                    <div className={styles.count}>
                        <motion.button onClick={()=>{count > 1 ? setCount(count - 1) : null}} whileTap={{scale: 1.05}} whileHover={{backgroundColor: "rgba(0,0,0,.2)"}} className={`${styles.btn} ${styles.btn_primary}`}>
                            <PrimaryBtn />
                        </motion.button>
                        <span>{count < 10 ? `0${count}` : count}</span>
                        <motion.button onClick={()=>{setCount(count + 1)}} whileTap={{scale: 1.05}} whileHover={{backgroundColor: "#474653"}} className={`${styles.btn} ${styles.btn_secondary}`}>
                            <SecondaryBtn />
                        </motion.button>
                    </div>
                    <p className={styles.summ}>${(Number(item.cost) * Number(count)).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
