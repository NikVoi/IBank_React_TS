import { FC } from 'react'
import styles from './SpendingPage.module.scss'

interface Props {
	className?: string
}

const SpendingPage: FC<Props> = ({ className }) => {
	return <section className={styles.Spending}>Spending</section>
}

export default SpendingPage
