import { Button } from '@/shared/ui/button'
import Loader from './Loader'
import styles from './Score.module.scss'

const Score = () => {
	return (
		<section className={styles.score}>
			<div className={styles.header}>
				<h2>Счета</h2>
				<Button>Открыть счет</Button>
			</div>

			<Loader />
		</section>
	)
}

export default Score
