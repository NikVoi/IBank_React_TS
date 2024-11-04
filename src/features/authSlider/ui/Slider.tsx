import Autoplay from 'embla-carousel-autoplay'
import { FC } from 'react'
import styles from '../styles/Slider.module.scss'

interface Props {
	className?: string
}

//FIXME: Убрать в константы Декомпозировать
//TODO: Добавить текст к слайдом и подобрать красивые слайды

import slide_1 from '@/shared/img/slide_1.jpg'
import slide_2 from '@/shared/img/slide_2.jpg'
import slide_3 from '@/shared/img/slide_3.jpg'
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel'

const slides = [
	{ src: slide_1, alt: 'Slide 1' },
	{ src: slide_2, alt: 'Slide 2' },
	{ src: slide_3, alt: 'Slide 3' },
]

const Slider: FC<Props> = ({ className }) => {
	return (
		<section className={styles.slider}>
			<Carousel
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
			>
				<CarouselContent>
					{slides.map((slide, index) => (
						<CarouselItem key={index}>
							<img src={slide.src} alt={slide.alt} className={styles.slide} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}

export default Slider
