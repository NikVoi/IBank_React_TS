import { FC } from 'react'
import { SettingsHeaderProps } from '../../model/types'
import styles from './SettingHeader.module.scss'

const SettingHeader: FC<SettingsHeaderProps> = ({ title, description }) => {
	return (
		<section className={styles.SettingHeader}>
			<h2>{title}</h2>
			<h3>{description}</h3>

			<hr />
		</section>
	)
}

export default SettingHeader
