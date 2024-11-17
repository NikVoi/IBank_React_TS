import { FC } from 'react'
import styles from './CurrencyPage.module.scss'

interface Props {
	className?: string
}

const CurrencyPage: FC<Props> = ({ className }) => {
	return <section className={styles.Currency}>Currency</section>
}

export default CurrencyPage
