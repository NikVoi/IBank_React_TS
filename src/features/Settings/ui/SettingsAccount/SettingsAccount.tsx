import { FC } from 'react'
import { SETTINGS_DESCRIPTIONS, SETTINGS_TITLES } from '../../model/constants'
import { SettingsHeader } from '../SettingsHeader'
import styles from './SettingsAccount.module.scss'

interface Props {
	className?: string
}

const SettingsAccount: FC<Props> = ({ className }) => {
	return (
		<section className={styles.account}>
			<SettingsHeader
				title={SETTINGS_TITLES.ACCOUNT}
				description={SETTINGS_DESCRIPTIONS.ACCOUNT}
			/>
		</section>
	)
}

export default SettingsAccount
