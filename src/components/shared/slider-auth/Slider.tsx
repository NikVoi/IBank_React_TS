import { FC } from 'react'
import styles from './Slider.module.scss'

interface Props {
	className?: string
}

import slide_1 from '../../../../public/Slide_1.jpg'

const Slider: FC<Props> = ({ className }) => {
	return (
		<section className={styles.slider}>
			<img src={slide_1} alt='' />
		</section>
	)
}

export default Slider
