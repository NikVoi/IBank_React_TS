import { FC } from 'react'
import { SETTINGS_DESCRIPTIONS, SETTINGS_TITLES } from '../../model/constants'
import { SettingsHeader } from '../SettingsHeader'
import styles from './SettingsProfile.module.scss'

interface Props {
	className?: string
}

const SettingsProfile: FC<Props> = ({ className }) => {
	return (
		<section className={styles.Profile}>
			<SettingsHeader
				title={SETTINGS_TITLES.PROFILE}
				description={SETTINGS_DESCRIPTIONS.PROFILE}
			/>
		</section>
	)
}

export default SettingsProfile
