import Image from 'next/image'
import styles from './DeliverCard.module.scss'
import Button from '../ui/Button/Button'

export type DeliverMan = {
    name: string
    surname: string
    photo: string
}

export type DeliverType = {
    deliverMan: DeliverMan
    time: number
    address: string
}

const DeliverCard = ({ deliver, classNames = [] }: { deliver: DeliverType; classNames?: string[] }) => {
    return (
        <div className={`${styles.container} ${classNames.map(el => `${el} `)}`}>
            <div className={styles.deliverMan}>
                <img
                    src={deliver.deliverMan.photo}
                    alt=''
                    className={styles.photo}
                />
                <div className={styles.content}>
                    <p>{deliver.deliverMan.name}</p>
                    <p>Food Rider</p>
                </div>
            </div>
            <div className={styles.deliverInfo}>
                <div className={styles.icons}>
                    <div>
                        <svg
                            width='43'
                            height='43'
                            viewBox='0 0 43 43'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                opacity='0.3'
                                cx='21.6744'
                                cy='21.0699'
                                r='20.9927'
                                fill='#6C5FBC'
                            />
                            <path
                                d='M18.2023 18.9624C18.2023 16.914 19.8629 15.2533 21.9113 15.2533C23.9598 15.2533 25.6204 16.914 25.6204 18.9624C25.6204 21.0109 23.9598 22.6715 21.9113 22.6715C19.8629 22.6715 18.2023 21.0109 18.2023 18.9624Z'
                                fill='#6C5FBC'
                            />
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M12.5228 17.6812C12.915 12.9234 16.8909 9.26172 21.6649 9.26172H22.1579C26.9318 9.26172 30.9078 12.9234 31.2999 17.6812C31.5111 20.2429 30.7198 22.7866 29.0928 24.7764L23.6226 31.4662C22.7382 32.5479 21.0846 32.5479 20.2001 31.4662L14.73 24.7764C13.1029 22.7866 12.3117 20.2429 12.5228 17.6812ZM21.9113 13.5414C18.9174 13.5414 16.4904 15.9685 16.4904 18.9624C16.4904 21.9564 18.9174 24.3834 21.9113 24.3834C24.9053 24.3834 27.3323 21.9564 27.3323 18.9624C27.3323 15.9685 24.9053 13.5414 21.9113 13.5414Z'
                                fill='#6C5FBC'
                            />
                        </svg>
                    </div>
                    <div>
                        <svg
                            width='3'
                            height='43'
                            viewBox='0 0 3 43'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <line
                                opacity='0.7'
                                x1='1.65786'
                                y1='0.0625'
                                x2='1.65786'
                                y2='42.0479'
                                stroke='#6C5FBC'
                                stroke-width='1.96807'
                                stroke-dasharray='2.62 2.62'
                            />
                        </svg>
                    </div>
                    <div>
                        <svg
                            width='43'
                            height='43'
                            viewBox='0 0 43 43'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                opacity='0.3'
                                cx='21.6744'
                                cy='21.0406'
                                r='20.9927'
                                fill='#6C5FBC'
                            />
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M11.1777 21.6963C11.1777 15.537 16.1708 10.5439 22.3301 10.5439C28.4894 10.5439 33.4825 15.537 33.4825 21.6963C33.4825 27.8556 28.4894 32.8487 22.3301 32.8487C16.1708 32.8487 11.1777 27.8556 11.1777 21.6963ZM23.3142 15.1361C23.3142 14.5926 22.8736 14.1521 22.3301 14.1521C21.7867 14.1521 21.3461 14.5926 21.3461 15.1361V21.6963C21.3461 22.0356 21.5209 22.351 21.8086 22.5308L25.7447 24.9909C26.2056 25.2789 26.8127 25.1388 27.1007 24.6779C27.3887 24.2171 27.2486 23.61 26.7878 23.322L23.3142 21.1509V15.1361Z'
                                fill='#6C5FBC'
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.item}>
                        <p className={styles.static}>Your Address</p>
                        <p className={styles.dynamic}>{deliver.address}</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.static}>Delivery Time</p>
                        <p className={styles.dynamic}>{deliver.time}</p>
                    </div>
                </div>
                <div className={styles.btn}>
                    <Button type='secondary'>Pending</Button>
                </div>
            </div>
        </div>
    )
}

export default DeliverCard
