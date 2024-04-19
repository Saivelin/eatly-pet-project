import HighlightText from '@/components/ui/HighlightText/HighlightText'
import styles from './FrequentlyQuestions.module.scss'
import FrequentlyQuestionsDATA from './FrequentlyQuestions.constants'
import Question from './Question/Question'
import Container from '@/components/ui/Container/Container'

const FrequentlyQuestions = () => {
    return (
        <Container classNames={[styles.container]}>
            <h4 className={styles.header}>
                Frequently Asked
                <br />
                <HighlightText>Questions</HighlightText>
            </h4>
            <div className={styles.content}>{
                FrequentlyQuestionsDATA && FrequentlyQuestionsDATA?.length && FrequentlyQuestionsDATA.length > 0 ? 
                    FrequentlyQuestionsDATA.map((el)=>(
                        <Question key={el.id} question={el}/>
                    ))
                : null
            }</div>
        </Container>
    )
}

export default FrequentlyQuestions
