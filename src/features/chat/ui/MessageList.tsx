import { FC } from 'react'
import styles from './MessageList.module.scss'

interface Props {
	className?: string
}

const MessageList: FC<Props> = ({ className }) => {
	return (
		<section className={styles.MessageList}>
			<div className={styles.messages}>
				<div
					className={
						// styles.MyMessage
						styles.TheirMessage
					}
				>
					<strong>Имя чувака</strong> его текс
				</div>
			</div>
		</section>
	)
}

export default MessageList
