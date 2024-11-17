import styles from '@/features/chat/styles/MessageList.module.scss'
import img from '@/shared/img/gamer.png'
import { FC } from 'react'

interface Props {
	className?: string
}

const MyMessage: FC<Props> = ({ className }) => {
	return (
		<div className={styles.MyMessage}>
			<div className={styles.avatarMessage}>
				<img src={img} alt='' />
			</div>

			<div className={styles.content}>
				<div className={styles.reverse}>
					<span className={styles.name}>Имя чувака</span>
					<span className={styles.date}>date 12:45</span>
				</div>

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

export default MyMessage
