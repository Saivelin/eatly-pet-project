import Image from 'next/image'
import styles from './PricingModule.module.scss'
import Container from '@/components/ui/Container/Container'
import image from "../../assets/images/Pricing.png"
import Table from './Table1/Table'
import { FEATURES, TABLE_RATES } from './Pricing.constants'
import ControlPurchases from '@/components/ControlPurchases/ControlPurchases'
import { DishesOrdered } from '../MainModule/MainModul.constants'
import CustomersSay from '@/components/CustomersSay/CustomersSay'
import Underline from '@/components/Underline/Underline'

const PricingModule = () => {
    return (
        <Container classNames={[styles.container]}>
            <div className={styles.welcomeBlock}>
                <div className={styles.background}></div>
                <h4 className={styles.header}>Our Pricing</h4>
                <Image src={image} alt='' fill className={styles.image}/>
            </div>
            <Table features={FEATURES} rates={TABLE_RATES}/>
            <ControlPurchases data={DishesOrdered}/>
            <Underline/>
            <CustomersSay/>
        </Container>
    )
}

export default PricingModule
