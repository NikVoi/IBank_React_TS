import { FC } from 'react'
import styles from './Transfer.module.scss'

interface Props {
	className?: string
}

const Transfer: FC<Props> = ({ className }) => {
	return <section className={styles.Transfer}>Transfer</section>
}

export default Transfer
