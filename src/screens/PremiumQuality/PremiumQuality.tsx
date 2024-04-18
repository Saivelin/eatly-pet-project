import Image from 'next/image'
import mainImage from '../../assets/images/QualityScreen.png'
import styles from './PremiumQuality.module.scss'
import Container from '@/components/ui/Container/Container'
import TextBlock from '@/components/TextBlock/TextBlock'
import HighlightText from '@/components/ui/HighlightText/HighlightText'
import Button from '@/components/ui/Button/Button'

const PremiumQuality = () => {
    return (
        <Container classNames={[styles.container]}>
            <div className={styles.imageContainer}>
                <Image
                    src={mainImage}
                    className={styles.image}
                    alt=''
                />
            </div>
            <TextBlock
                header={
                    <span>
                        Premium <HighlightText>Quality</HighlightText> For Your Health
                    </span>
                }
                text={
                    <ul className={styles.textList}>
                        <li>
                            Premium quality food is made with ingredients that are packed with essential vitamins,
                            minerals.
                        </li>
                        <li>
                            These foods promote overall wellness by support healthy digestion and boosting immunity.
                        </li>
                    </ul>
                }
            >
                <Button type='secondary'>
                    <span>Download</span>{' '}
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M4.70605 10.0762H15.946'
                            stroke='white'
                            strokeWidth='1.6055'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973'
                            stroke='white'
                            strokeWidth='1.6055'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </Button>
            </TextBlock>
        </Container>
    )
}

export default PremiumQuality
