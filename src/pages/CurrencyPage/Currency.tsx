import { FC } from 'react'
import styles from './Currency.module.scss'

interface Props {
	className?: string
}

const Currency: FC<Props> = ({ className }) => {
	return <section className={styles.Currency}>Currency</section>
}

export default Currency
