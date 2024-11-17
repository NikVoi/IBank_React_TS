import { Skeleton } from '@/shared/ui/skeleton'
import styles from './Card.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<Skeleton className='h-[125px] w-[250px] rounded-xl mr-4' />
			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
		</div>
	)
}

export default Loader
