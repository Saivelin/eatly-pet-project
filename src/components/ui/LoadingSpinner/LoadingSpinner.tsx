"use client"

import {motion } from "framer-motion"
import styles from "./LoadingSpinner.module.scss"

const LoadingSpinner = () => {
    return <motion.div className={styles.spinner} initial={{scale: .5}} animate={{scale: 1}} transition={{duration: 1, repeat: Infinity, repeatType: "reverse", ease: "circInOut"}}>
        
    </motion.div>
}

export default LoadingSpinner
