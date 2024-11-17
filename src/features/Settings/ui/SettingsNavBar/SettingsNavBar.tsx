import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SETTING_NAVIGATION } from '../../model/constants'
import styles from './SettingsNavBar.module.scss'

interface Props {
	activeComponent: string
	setActiveComponent: (component: string) => void
}

const SettingsNavBar: FC<Props> = ({ activeComponent, setActiveComponent }) => {
	//TODO: ВЫнести 2 раза используется
	//TODO Добавиь выделение активного элемента
	const navigate = useNavigate()

	const handleItemClick = (path: string) => {
		setActiveComponent(path)
		navigate(path)
	}

	return (
		<section className={styles.SettingsNavBar}>
			{SETTING_NAVIGATION.map(navItem => (
				<Button
					key={navItem.id}
					variant={'ghost'}
					position={'left'}
					size={'long'}
					className={cn(styles.item, {
						[styles.active]: activeComponent === navItem.path, // Выделяем активный пункт
					})}
					onClick={() => handleItemClick(navItem.path)}
				>
					<h3>{navItem.title}</h3>
				</Button>
			))}
		</section>
	)
}

export default SettingsNavBar
