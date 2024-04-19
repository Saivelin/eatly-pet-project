import Image from 'next/image'
import Background from './Background'
import styles from './StockBanner.module.scss'
import img from '../../assets/images/StockBanner.png'
import Input from '../ui/Input/Input'
import Button from '../ui/Button/Button'

const StockBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Background />
            </div>
            <div className={styles.content}>
                <p className={styles.header}>Get 50%</p>
                <div className={styles.inputWithBtn}>
                    <Input type='text' placeholder="Enter Your Email Address"/>
                    <Button type='secondary'>SUBSCRIBE</Button>
                </div>
            </div>
            <Image
                src={img}
                fill
                alt=''
                className={styles.image}
            />
        </div>
    )
}

export default StockBanner
