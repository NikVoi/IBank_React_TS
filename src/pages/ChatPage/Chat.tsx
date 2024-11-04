import { FC } from 'react'
import styles from './Chat.module.scss'

interface Props {
	className?: string
}

const Chat: FC<Props> = ({ className }) => {
	return <section className={styles.Chat}>Chat</section>
}

export default Chat
