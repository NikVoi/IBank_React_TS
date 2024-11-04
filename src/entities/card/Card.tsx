import { Button } from '@/shared/ui/button'
import styles from './Card.module.scss'
import Loader from './Loader'

const Card = () => {
	return (
		<section className={styles.card}>
			<div className={styles.action}>
				<Button> Добавить карту</Button>
			</div>

			<Loader />
		</section>
	)
}

export default Card
