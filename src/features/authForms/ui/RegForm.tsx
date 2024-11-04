import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FC } from 'react'
import styles from '../styles/style.module.scss'

interface Props {
	className?: string
}

const RegForm: FC<Props> = ({ className }) => {
	return (
		<section className={styles.form}>
			<Input type='email' placeholder='Почта' />
			<Input type='password' placeholder='Пароль' />
			<Input type='tel' placeholder='+375(29)-999-99-99' />

			<Button>Зарегистрироваться</Button>
		</section>
	)
}

export default RegForm