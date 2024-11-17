import {
	SETTINGS_DESCRIPTIONS,
	SETTINGS_TITLES,
} from '@/features/Settings/model/constants'
import { SettingsNavBar } from '@/features/Settings/ui'
import SettingHeader from '@/features/Settings/ui/SettingsHeader/SettingHeader'
import { FC, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './SettingsPage.module.scss'

interface Props {
	className?: string
}

const SettingsPage: FC<Props> = ({ className }) => {
	//TODO: Выенсти как хук ибо 2 раза используется

	const location = useLocation()
	const [activeComponent, setActiveComponent] = useState(location.pathname)

	useEffect(() => {
		setActiveComponent(location.pathname)
	}, [location.pathname])

	return (
		<section className={styles.Settings}>
			<SettingHeader
				title={SETTINGS_TITLES.SETTINGS}
				description={SETTINGS_DESCRIPTIONS.SETTINGS}
			/>
			<div className={styles.wrapper}>
				<SettingsNavBar
					activeComponent={activeComponent}
					setActiveComponent={setActiveComponent}
				/>
				{<Outlet />}
			</div>
		</section>
	)
}

export default SettingsPage
