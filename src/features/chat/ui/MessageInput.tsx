import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FC } from 'react'
import styles from './MessageInput.module.scss'

interface Props {
	className?: string
}

const MessageInput: FC<Props> = ({ className }) => {
	return (
		<section className={styles.MessageInput}>
			<form className={styles.Input}>
				<Input type='text' placeholder='Сообщение...' />
				<Button type='submit'>send</Button>
			</form>
		</section>
	)
}

export default MessageInput
