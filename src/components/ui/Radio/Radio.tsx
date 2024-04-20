'use client'

import { useState } from 'react'
import styles from './Radio.module.scss'
import { motion } from 'framer-motion'

const Radio = ({ btns }: { btns: string[] }) => {
    const [active, setActive] = useState<number>(0)

    return (
        <div className={styles.container}>
            {btns.map((el, i) => (
                <motion.div
                    onClick={() => {
                        setActive(i)
                    }}
                    className={styles.button}
                    animate={
                        active === i
                            ? { color: '#F3F5F6', backgroundColor: '#6C5FBC' }
                            : { color: '#6C5FBC', backgroundColor: 'transparent' }
                    }
                    whileHover={
                        active === i ? { backgroundColor: 'rgb(76 67 137)' } : { backgroundColor: 'rgb(245 245 245)' }
                    }
                >
                    {el}
                </motion.div>
            ))}
        </div>
    )
}

export default Radio
