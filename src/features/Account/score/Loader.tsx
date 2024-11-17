import { Skeleton } from '@/shared/ui/skeleton'
import styles from './Score.module.scss'

const Loader = () => {
	return (
		<section className={styles.loader}>
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} className={styles.scoreItem}>
					<Skeleton className='size-20 rounded-full mb-2' />

					<div className={styles.info}>
						<Skeleton className='w-20 h-4 rounded-xl mb-1' />
						<Skeleton className='w-20 h-4 rounded-xl' />
					</div>
				</div>
			))}
		</section>
	)
}

export default Loader
