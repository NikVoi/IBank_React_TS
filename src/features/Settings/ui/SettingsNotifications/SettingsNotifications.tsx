import { FC } from 'react'
import { SETTINGS_DESCRIPTIONS, SETTINGS_TITLES } from '../../model/constants'
import { SettingsHeader } from '../SettingsHeader'
import styles from './SettingsNotifications.module.scss'

interface Props {
	className?: string
}

const SettingsNotifications: FC<Props> = ({ className }) => {
	return (
		<section className={styles.Notifications}>
			<SettingsHeader
				title={SETTINGS_TITLES.NOTIFICATIONS}
				description={SETTINGS_DESCRIPTIONS.NOTIFICATIONS}
			/>
		</section>
	)
}

export default SettingsNotifications
