import { RestaurantCardType, TagType } from "@/types/restaurant";

export const TagsDATA : TagType[] = [
    {
        id: 1,
        title: "Healthy",
        color: "#F7EDD0"
    },
    {
        id: 2,
        title: "Trending",
        color: "#F7C5BA"
    },
]

export const RestaurantCardsDATA : RestaurantCardType[] = [
    {
        id: 1,
        title: "The Chicken King",
        deliveryDuration: 24 * 60,
        rating: 4.9,
        tags: [TagsDATA[0]],
        photo: "https://optim.tildacdn.com/tild3261-3263-4366-a436-663436373532/-/cover/432x432/center/center/-/format/webp/06-800x800.jpg"
    },
    {
        id: 2,
        title: "The Burger King",
        deliveryDuration: 29 * 60,
        rating: 4.1,
        tags: [TagsDATA[1]],
        photo: "https://optim.tildacdn.com/tild3566-3231-4330-a265-623530383665/-/cover/432x432/center/center/-/format/webp/Screenshot_3.jpg"
    },
    {
        id: 3,
        title: "The Food King",
        deliveryDuration: 139 * 60,
        rating: 4.7,
        tags: [TagsDATA[1]],
        photo: "https://optim.tildacdn.com/tild6436-6534-4539-b033-656365646362/-/cover/432x432/center/center/-/format/webp/wedding.jpg"
    },
]