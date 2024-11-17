import { DataTable } from '@/features/Transfer/ui'
import styles from './TransferPage.module.scss'

const TransferPage = () => {
	return (
		<section className={styles.transfer}>
			<h2>Активности</h2>

			<hr />

			<DataTable />
		</section>
	)
}

export default TransferPage
