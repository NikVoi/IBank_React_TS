import { FC } from 'react'
import { FormRegister } from '../FormRegister'
import styles from './Register.module.scss'

interface Props {
	className?: string
}

const Register: FC<Props> = ({ className }) => {
	return (
		<section className={styles.register}>
			<h2>Регистрация Профиля</h2>
			<h3>
				Внесите изменения в свой профиль здесь. Когда закончите, нажмите
				сохранить.
			</h3>

			<hr />

			<FormRegister />
		</section>
	)
}

export default Register
