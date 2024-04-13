import { BannerItemType } from "@/components/InfoBanner/InfoBanner";
import { TagsDATA } from "@/components/RestaurantCardsWrapper/mockData";
import { Dish } from "@/types/dishes";

export const InfoBannerDATA: BannerItemType[] = [
    {
        header: "10K+",
        text: "Satisfied Costumers All Great Over The World"
    },
    {
        header: "4M",
        text: "Healthy Dishes Sold Including Milk Shakes Smooth"
    },
    {
        header: "99.99%",
        text: "Reliable Customer Support We Provide Great Experiences"
    }
]

export const OurDishesDATA: Dish[] = [
    {
        id: 1, 
        title: "Chicken Hell",
        tags: [TagsDATA[0]],
        time: 24 * 60,
        rating: 4.9,
        cost: 12.99,
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
    {
        id: 2, 
        title: "Chicken Hell",
        tags: [TagsDATA[1], TagsDATA[0]],
        time: 26 * 60,
        rating: 4.7,
        cost: 19.99,
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
    {
        id: 3, 
        title: "Chicken Hell",
        tags: [TagsDATA[0]],
        time: 153 * 60,
        rating: 4.4,
        cost: 11.99,
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
    {
        id: 4, 
        title: "Chicken Hell",
        tags: [TagsDATA[1]],
        time: 15 * 60,
        rating: 4.8,
        cost: 14.99,
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
    {
        id: 5, 
        title: "Chicken Hell",
        tags: [TagsDATA[0]],
        time: 25 * 60,
        rating: 5,
        cost: 24.99,
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
]