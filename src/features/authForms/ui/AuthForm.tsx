import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FC } from 'react'
import styles from '../styles/style.module.scss'

interface Props {
	className?: string
}

const AuthForm: FC<Props> = ({ className }) => {
	return (
		<section className={styles.form}>
			<Input type='email' placeholder='Почта' />
			<Input type='password' placeholder='Пароль' />

			<Button>Авторизоваться</Button>
		</section>
	)
}

export default AuthForm
