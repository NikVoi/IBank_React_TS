import useAuthStore from '@/features/auth/model/authStore'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { LoaderCircle } from 'lucide-react'
import { ChangeEventHandler, FC } from 'react'
import { useRegisterMutation } from '../../hooks/useRegisterMutation'
import styles from './AuthForm.module.scss'

interface Props {
	buttonText: string
	handleInputEmail: ChangeEventHandler<HTMLInputElement>
	handleInputPassword: ChangeEventHandler<HTMLInputElement>
}

const AuthForm: FC<Props> = ({
	buttonText,
	handleInputEmail,
	handleInputPassword,
}) => {
	const user = useAuthStore(state => state.user)
	const { mutate, isPending } = useRegisterMutation()

	const handleRegister = () => {
		mutate({ email: user.email, password: user.passwordHash })
	}

	return (
		<section className={styles.form}>
			<Input type='email' placeholder='Почта' onChange={handleInputEmail} />
			<Input
				type='password'
				placeholder='Пароль'
				onChange={handleInputPassword}
			/>

			{isPending ? (
				<Button disabled>
					<LoaderCircle className='animate-spin size-5 mr-3' />
					Загрузка
				</Button>
			) : (
				<Button onClick={() => handleRegister()}>{buttonText}</Button>
			)}
		</section>
	)
}

export default AuthForm
