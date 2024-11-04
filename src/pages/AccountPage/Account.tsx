import Card from '@/entities/card/Card'
import Categories from '@/entities/categories/Categories'
import Details from '@/entities/details/Details'
import Score from '@/entities/score/Score'
import Transactions from '@/entities/transaction/Transactions'
import { FC } from 'react'
import styles from './Account.module.scss'

interface Props {
	className?: string
}

const Account: FC<Props> = ({ className }) => {
	return (
		<section className={styles.account}>
			<Details />
			<Card />
			<Transactions />
			<Score />
			<Categories />
		</section>
	)
}

export default Account
