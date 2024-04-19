'use client'

import Underline from '@/components/Underline/Underline'
import { QuestionType } from '../FrequentlyQuestions.constants'
import styles from './Question.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useHover } from '@uidotdev/usehooks'

const Question = ({ question }: { question: QuestionType }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ref, isHovered] = useHover()

    return (
        <div
            onClick={() => {
                setIsOpen(!isOpen)
            }}
            style={{ cursor: 'pointer' }}
            ref={ref}
        >
            <div className={styles.container}>
                <span className={styles.question}>{question.question}</span>
                <motion.div
                    className={styles.toggle}
                    animate={isHovered === true ? { backgroundColor: '#574d99' } : {}}
                >
                    <motion.div
                        className={styles.vertical}
                        animate={isOpen === false ? { rotate: 90 } : { rotate: 0 }}
                        initial={{ rotate: 95 }}
                    ></motion.div>
                    <div className={styles.horizontal}></div>
                </motion.div>
            </div>
            <motion.div
                className={styles.answer}
                animate={
                    isOpen === false
                        ? { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }
                        : { height: 'auto', opacity: 1, paddingTop: 8, paddingBottom: '28px' }
                }
            >
                <p>{question.answer}</p>
            </motion.div>
            <Underline />
        </div>
    )
}

export default Question
