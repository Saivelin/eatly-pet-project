import { ReactNode } from "react"
import { TagType } from "./restaurant"

export enum DeliverStatuses {
    Canceled= "Canceled",
    OnWay = "On The Way",
    Delivered = "Delivered"
}

export type Dish = {
    id: number
    title: string
    tags: TagType[]
    time: number
    rating: number
    cost: number
    photo: string
}

export type DishOrder = {
    id: number
    title: string
    tags: TagType[]
    time: number
    rating: number
    cost: number
    photo: string
    dateOfDeliver: string
    deliverStatus: DeliverStatuses
}

export type Category = {
    id: number
    title: string
    icon: any | string
    color: string
}