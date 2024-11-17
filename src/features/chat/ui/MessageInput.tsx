import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FC } from 'react'
import { IoSend } from 'react-icons/io5'
import styles from '../styles/MessageInput.module.scss'

interface Props {
	className?: string
}

const MessageInput: FC<Props> = ({ className }) => {
	return (
		<section className={styles.MessageInput}>
			<Input type='text' placeholder='Сообщение...' />
			<Button type='submit'>
				<IoSend />
			</Button>
		</section>
	)
}

export default MessageInput
