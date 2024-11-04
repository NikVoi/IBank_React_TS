import { Button } from '@/shared/ui/button'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FaPiggyBank } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import AuthForm from '../../authForms/ui/AuthForm'
import RegForm from '../../authForms/ui/RegForm'
import styles from '../styles/Auth.module.scss'

interface Props {
	className?: string
}

const Auth: FC<Props> = ({ className }) => {
	const [isRegistering, setIsRegistering] = useState(true)

	const toggleMode = () => {
		setIsRegistering(!isRegistering)
	}

	const variants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 100 },
	}

	return (
		<section className={styles.auth}>
			<div className={styles.switch}>
				<Button variant={'ghost'} onClick={toggleMode}>
					{isRegistering ? 'Вход' : 'Регистрация'}
				</Button>
			</div>

			<motion.div
				key={isRegistering ? 'regForm' : 'authForm'}
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<h1 className={styles.logo}>
					<FaPiggyBank /> IBank
				</h1>

				<h1 className={styles.title}>Добро пожаловать</h1>
				<h2 className={styles.subTitle}>Введите свои данные</h2>

				{isRegistering ? <RegForm /> : <AuthForm />}

				<div className={styles.line}>
					<hr /> <span>или войдите через </span> <hr />
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
			</motion.div>
		</section>
	)
}

export default Auth
