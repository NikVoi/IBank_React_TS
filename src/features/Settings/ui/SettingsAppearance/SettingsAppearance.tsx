import { FC } from 'react'
import { SETTINGS_DESCRIPTIONS, SETTINGS_TITLES } from '../../model/constants'
import { SettingsHeader } from '../SettingsHeader'
import styles from './SettingsAppearance.module.scss'

interface Props {
	className?: string
}

const SettingsAppearance: FC<Props> = ({ className }) => {
	return (
		<section className={styles.Appearance}>
			<SettingsHeader
				title={SETTINGS_TITLES.APPEARANCE}
				description={SETTINGS_DESCRIPTIONS.APPEARANCE}
			/>
		</section>
	)
}

export default SettingsAppearance
