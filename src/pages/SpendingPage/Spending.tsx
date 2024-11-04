import { FC } from 'react'
import styles from './Spending.module.scss'

interface Props {
	className?: string
}

const Spending: FC<Props> = ({ className }) => {
	return <section className={styles.Spending}>Spending</section>
}

export default Spending
