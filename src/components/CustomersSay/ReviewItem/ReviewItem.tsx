type ReviewType = {
    id: number
    name: string
    yearsWithUs: number
    photo: string
    text: string
    rating: number
}

const ReviewItem = ({item} : {item: ReviewType}) => {
    return <div>ReviewItem</div>
}

export default ReviewItem
