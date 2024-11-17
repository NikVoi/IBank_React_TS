import { Input } from '@/shared/ui/input'
import { IoSearchSharp } from 'react-icons/io5'
import styles from '../styles/ChatList.module.scss'

import img from '@/shared/img/gamer.png'

const ChatList = () => {
	return (
		<section className={styles.chatList}>
			<div className={styles.search}>
				<IoSearchSharp className={styles.icon} />
				<Input type='text' placeholder='Поиск' />
			</div>

			<div className={styles.wrapper}>
				<div className={styles.items}>
					<div className={styles.img}>
						<img src={img} alt='avatar' />
					</div>

					<div className={styles.text}>
						<div className={styles.header}>
							<div className={styles.name}>mr smit</div>
							<div className={styles.time}>12:45</div>
						</div>

						<div className={styles.message}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							nobis. Qui quisquam at fugiat quaerat alias natus officia ea,
							eaque doloremque. Ea, ipsum ut natus dolorem praesentium debitis
							at! Deserunt.
						</div>
					</div>
				</div>

				<div className={styles.items}>
					<div className={styles.img}>
						<img src={img} alt='avatar' />
					</div>

					<div className={styles.text}>
						<div className={styles.header}>
							<div className={styles.name}>mr smit</div>
							<div className={styles.time}>12:45</div>
						</div>

						<div className={styles.message}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							nobis. Qui quisquam at fugiat quaerat alias natus officia ea,
							eaque doloremque. Ea, ipsum ut natus dolorem praesentium debitis
							at! Deserunt.
						</div>
					</div>
				</div>

				<div className={styles.items}>
					<div className={styles.img}>
						<img src={img} alt='avatar' />
					</div>

					<div className={styles.text}>
						<div className={styles.header}>
							<div className={styles.name}>mr smit</div>
							<div className={styles.time}>12:45</div>
						</div>

						<div className={styles.message}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							nobis. Qui quisquam at fugiat quaerat alias natus officia ea,
							eaque doloremque. Ea, ipsum ut natus dolorem praesentium debitis
							at! Deserunt.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ChatList
