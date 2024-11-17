import styles from '@/features/chat/styles/MessageList.module.scss'
import img from '@/shared/img/gamer.png'
import { Button } from '@/shared/ui/button'
import { FC } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

interface Props {
	className?: string
}

const MessageList: FC<Props> = ({ className }) => {
	return (
		<section className={styles.MessageList}>
			<header>
				<Button variant={'link'}>
					<IoIosArrowBack />
				</Button>

				<div className={styles.avatar}>
					<img src={img} alt='' />
				</div>

				<div className={styles.wrapper}>
					<div className={styles.name}>user name </div>
					<div className={styles.active}>online\offline</div>
				</div>
			</header>

			<div className={styles.messages}>
				<MyMessage />
				<TheirMessage />
			</div>
		</section>
	)
}

export default MessageList
