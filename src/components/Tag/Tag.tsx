import { TagType } from '@/types/restaurant'
import styles from "./Tag.module.scss"

const Tag = ({ tag }: { tag: TagType }) => {
    return (
        <div className={styles.tag} style={{background: tag.color, display: "inline-block"}}>
            <span style={{color: tag.color, filter: "contrast(0.5)"}}>{tag.title}</span>
        </div>
    )
}

export default Tag
