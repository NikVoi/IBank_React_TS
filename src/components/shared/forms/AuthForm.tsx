import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FC } from 'react'
import styles from './style.module.scss'

interface Props {
	className?: string
}

const AuthForm: FC<Props> = ({ className }) => {
	return (
		<section className={styles.form}>
			<Input type='email' placeholder='Почта' />
			<Input type='password' placeholder='Пароль' />
			{/* <Input type='tel' placeholder='+375(29)-999-99-99' /> */}

			<Button>Авторизоваться</Button>
		</section>
	)
}

export default AuthForm
