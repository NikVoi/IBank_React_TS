import { FC } from 'react'
import styles from './Settings.module.scss'

interface Props {
	className?: string
}

const Settings: FC<Props> = ({ className }) => {
	return <section className={styles.Settings}>Settings</section>
}

export default Settings
