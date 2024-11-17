import ChatList from '@/features/chat/ui/ChatList'
import MessageInput from '@/features/chat/ui/MessageInput'
import MessageList from '@/features/chat/ui/MessageList/MessageList'
import { FC } from 'react'
import styles from './ChatPage.module.scss'

interface Props {
	className?: string
}

const ChatPage: FC<Props> = ({ className }) => {
	return (
		<section className={styles.chat}>
			<ChatList />
			<div className={styles.wrapper}>
				<MessageList />
				<MessageInput />
			</div>
		</section>
	)
}

export default ChatPage
