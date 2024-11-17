import styles from './Categories.module.scss'
import Loader from './Loader'

const Categories = () => {
	return (
		<section className={styles.categories}>
			<h2>Категории</h2>

			<Loader />

			<div className={styles.wrapper}></div>
		</section>
	)
}

export default Categories
