import { Button } from '@/shared/ui/button'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FaPiggyBank } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useAppleLoginMutation } from '../../hooks/useAuthWithAppleId'
import { useGoogleLoginMutation } from '../../hooks/useLoginWithGoogle'
import useAuthStore from '../../model/authStore'
import AuthForm from '../AuthForm/AuthForm'
import styles from './AuthLayout.module.scss'

const AuthLayout = () => {
	const [isRegistering, setIsRegistering] = useState(true)
	const setUserEmail = useAuthStore(state => state.setUserEmail)
	const setUserPassword = useAuthStore(state => state.setUserPassword)

	const toggleMode = () => {
		setIsRegistering(!isRegistering)
	}

	const variants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 100 },
	}

	const handleInputEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUserEmail(e.target.value)
		},
		[setUserEmail]
	)

	const handleInputPassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUserPassword(e.target.value)
		},
		[setUserPassword]
	)

	const googleLoginMutation = useGoogleLoginMutation()

	const handleGoogleLogin = () => {
		googleLoginMutation.mutate()
	}

	const appleLoginMutation = useAppleLoginMutation()

	const handleAppleLogin = () => {
		appleLoginMutation.mutate()
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

				<AuthForm
					buttonText={isRegistering ? 'Зарегистрироваться' : 'Авторизоваться'}
					handleInputEmail={handleInputEmail}
					handleInputPassword={handleInputPassword}
				/>

				<div className={styles.line}>
					<hr /> <span>или войдите через </span> <hr />
				</div>

				<div className={styles.other}>
					<Button
						variant={'secondary'}
						onClick={handleGoogleLogin}
						disabled={googleLoginMutation.isPending}
					>
						<FcGoogle className='h-4 w-4' />
					</Button>

					<Button
						variant={'secondary'}
						onClick={handleAppleLogin}
						disabled={appleLoginMutation.isPending}
					>
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

export default AuthLayout
