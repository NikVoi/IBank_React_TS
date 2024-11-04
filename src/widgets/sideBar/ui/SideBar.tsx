import { cn } from '@/shared/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { FC } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaAngleRight, FaPiggyBank } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { navigation } from '../model/Navigation.data'
import styles from '../styles/SideBar.module.scss'

interface Props {
	className?: string
	activeComponent: string
	setActiveComponent: (component: string) => void
}

const SideBar: FC<Props> = ({
	className,
	activeComponent,
	setActiveComponent,
}) => {
	const navigate = useNavigate()

	const handleItemClick = (path: string) => {
		setActiveComponent(path)
		navigate(path)
	}

	return (
		<section className={styles.sideBar}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<FaPiggyBank /> <span>IBank</span>
				</div>
			</header>

			<nav>
				{navigation.map(navItem => (
					<div
						className={cn(styles.item, {
							[styles.active]: activeComponent === navItem.path, // Выделяем активный пункт
						})}
						key={navItem.id}
						onClick={() => handleItemClick(navItem.path)}
					>
						<span>
							{navItem.svg} {navItem.title}
						</span>
						<FaAngleRight className={styles.right} />
					</div>
				))}
			</nav>

			<footer className={styles.footer}>
				<div className={styles.user}>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div className={styles.user_wrapper}>
						<p>Привет</p>
						<p>
							<AiOutlineLogout />
						</p>
					</div>
				</div>
			</footer>
		</section>
	)
}

export default SideBar
