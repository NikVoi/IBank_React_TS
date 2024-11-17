import { FC } from 'react'
import styles from './AccountPage.module.scss'

interface Props {
	className?: string
}

const AccountPage: FC<Props> = ({ className }) => {
	return (
		<section className={styles.account}>
			{/* <Details />
			<Card />
			<Transactions />
			<Score />
			<Categories /> */}
		</section>
	)
}

export default AccountPage
