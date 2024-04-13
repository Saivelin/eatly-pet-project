import { TagType } from "./restaurant"

export type Dish = {
    id: number
    title: string
    tags: TagType[]
    time: number
    rating: number
    cost: number
    photo: string
}