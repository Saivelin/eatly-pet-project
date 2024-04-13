export type TagType = {
    id: number
    title: string
    color: string
}

export type RestaurantCardType = {
    id: number
    title: string
    tags: TagType[]
    deliveryDuration: number
    rating: number
    photo: string
}