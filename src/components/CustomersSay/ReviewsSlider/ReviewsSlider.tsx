'use client'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { reviews } from './ReviewsSlider.constants'
import ReviewItem from '../ReviewItem/ReviewItem'
import styles from './ReviewsSlider.module.scss'
import { Keyboard, Mousewheel, Scrollbar } from 'swiper/modules'
import 'swiper/css/scrollbar'
import { useEffect, useRef, useState } from 'react'

const ReviewsSlider = () => {
    const swiper = useRef<SwiperRef>(null)
    const [slideActive, setSlideActive] = useState(0)

    const getActiveSlide = () => {
        if (swiper?.current && swiper.current?.swiper) {
            console.log(swiper.current?.swiper)
            setSlideActive(swiper.current?.swiper?.activeIndex)
        }
    }

    useEffect(() => {
        getActiveSlide()
    }, [])

    return (
        <Swiper
            slidesPerView={2.1}
            spaceBetween={40}
            modules={[Scrollbar, Mousewheel, Keyboard]}
            speed={1000}
            scrollbar={{ draggable: true, el: `#scrollBar` }}
            ref={swiper}
            className={styles.swiperContainer}
            onSlideChange={getActiveSlide}
            mousewheel={{enabled: true}}
            keyboard={{enabled: true}}
        >
            {reviews && reviews?.length && reviews?.length > 0
                ? reviews.map((el, i) => (
                      <SwiperSlide
                          className={`${styles.slide}`}
                          key={el.id}
                      >
                          <ReviewItem item={el} animHeight={slideActive == i ? 13.6 : 8.5}/>
                      </SwiperSlide>
                  ))
                : null}
            <div
                id='scrollBar'
                className={`${styles.customScrollbar}`}
            ></div>
        </Swiper>
    )
}

export default ReviewsSlider
