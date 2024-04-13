'use client'

import styles from './Underline.module.scss'
import { motion } from 'framer-motion'

const Underline = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{duration: 1}}
            className={styles.underline}
        ></motion.div>
    )
}

export default Underline
