import styles from './Details.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.information}>
				<div className={styles.currentBalance}>
					<p></p>
					<p></p>
				</div>

				<div className={styles.description}>
					<div className={styles.title}>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
					</div>

					<div className={styles.info}>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
						<p className={styles.item}></p>
					</div>
				</div>
			</div>

			<div className={styles.actions}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
