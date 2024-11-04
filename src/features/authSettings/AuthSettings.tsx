import { FC } from 'react'

import FormSetting from '../authForms/ui/FormSetting'
import styles from './AuthSettings.module.scss'

interface Props {
	className?: string
}

const AuthSettings: FC<Props> = ({ className }) => {
	return (
		<section className={styles.authSettings}>
			<h2>Настройка Профиля</h2>
			<h3>
				Внесите изменения в свой профиль здесь. Когда закончите, нажмите
				сохранить.
			</h3>

			<FormSetting />
		</section>
	)
}

export default AuthSettings
