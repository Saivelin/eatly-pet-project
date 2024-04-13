import styles from "./InfoBanner.module.scss"

export type BannerItemType = {
    header: string,
    text: string
}

const InfoBanner = ({items}: {items: BannerItemType[]}) => {
  return (
    <div className={styles.infoBanner}>
        {items.map((el, i)=>(
            <div className={styles.item}>
                <h4>{el.header}</h4>
                <p>{el.text}</p>
            </div>
        ))}
    </div>
  )
}

export default InfoBanner