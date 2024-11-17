import styles from '@/features/chat/styles/MessageList.module.scss'
import img from '@/shared/img/gamer.png'
import { FC } from 'react'

interface Props {
	className?: string
}

const TheirMessage: FC<Props> = ({ className }) => {
	return (
		<div className={styles.TheirMessage}>
			<div className={styles.avatarMessage}>
				<img src={img} alt='' />
			</div>

			<div className={styles.content}>
				<span className={styles.name}>Имя чувака</span>
				<span className={styles.date}>date 12:45</span>

				<div className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					ratione perspiciatis accusamus sapiente dolor veniam inventore nihil
					neque ab nobis praesentium rem, saepe corporis totam fugit laudantium
					itaque ut quos!
				</div>
			</div>
		</div>
	)
}

export default TheirMessage
