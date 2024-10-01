import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
	className?: string
}

const Setting: FC<Props> = ({ className }) => {
	return (
		<section className={styles.Setting}>
			<Input placeholder='Имя' />
			<Input placeholder='Фамилия' />
			<Input placeholder='Отчество' />
			<Input type='tel' placeholder='+375(29)-999-99-99' />

			<Button>далее</Button>
		</section>
	)
}

export default Setting
