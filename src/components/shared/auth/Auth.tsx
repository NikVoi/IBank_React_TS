import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { FaApple } from 'react-icons/fa'
import { FaPiggyBank } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import RegForm from '../forms/RegForm'
import styles from './Auth.module.scss'

interface Props {
	className?: string
}

const Auth: FC<Props> = ({ className }) => {
	return (
		<section className={styles.auth}>
			<div className={styles.switch}>
				<Button variant={'ghost'}>Регистрация</Button>
			</div>

			<h1 className={styles.logo}>
				<FaPiggyBank /> IBank
			</h1>

			<h1 className={styles.title}>Добро пожаловать</h1>
			<h2 className={styles.subTitle}>Введите свои данные</h2>

			{/* <AuthForm /> */}
			<RegForm />

			<div className={styles.line}>
				<span></span> или войдите через <span></span>
			</div>

			<div className={styles.other}>
				<Button variant={'secondary'}>
					<FcGoogle className='h-4 w-4' />
				</Button>

				<Button variant={'secondary'}>
					<FaApple className='h-4 w-4' />
				</Button>
			</div>

			<div className={styles.policy}>
				Нажав продолжить, вы соглашаетесь с нашими условиями{' '}
				<a href='#' className={styles.link}>
					условия обслуживания
				</a>{' '}
				и{' '}
				<a href='#' className={styles.link}>
					политика конфиденциальности.
				</a>
			</div>
		</section>
	)
}

export default Auth
