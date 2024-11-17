import { Register } from '@/features/register/ui'
import { FC } from 'react'
import styles from './RegisterPage.module.scss'

interface Props {
	className?: string
}

const RegisterPage: FC<Props> = ({ className }) => {
	return (
		<section className={styles.RegisterPage}>
			<Register />
		</section>
	)
}

export default RegisterPage
