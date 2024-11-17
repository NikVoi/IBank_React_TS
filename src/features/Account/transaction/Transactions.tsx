import Loader from './Loader'
import styles from './Transactions.module.scss'

const Transactions = () => {
	return (
		<section className={styles.transactions}>
			<div className={styles.title}>Транзакции</div>

			<Loader />

			{/* <div className={styles.container}></div> */}
		</section>
	)
}

export default Transactions
