import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { FC } from 'react'
import styles from '../styles/styles.module.scss'

interface Props {
	className?: string
}

// TODO: Подумать как можно вынести его в отдельную страницу для получение доп информации или просто компонентом на странице авторизации

const FormSetting: FC<Props> = ({ className }) => {
	return (
		<section className={styles.settingForm}>
			<div className='grid gap-4 py-4'>
				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='name' className='text-right'>
						Имя
					</Label>
					<Input id='name' placeholder='Введите имя' className='col-span-3' />
				</div>

				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='lastName' className='text-right'>
						Фамилия
					</Label>
					<Input
						id='lastName'
						placeholder='Введите фамилию'
						className='col-span-3'
					/>
				</div>

				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='Middle name' className='text-right'>
						Отчество
					</Label>
					<Input
						id='Middle name'
						placeholder='Введите отчество'
						className='col-span-3'
					/>
				</div>

				<div className='grid grid-cols-4 items-center gap-4'>
					<Label htmlFor='tel' className='text-right'>
						телефон
					</Label>
					<Input
						id='tel'
						placeholder='+375(29)-999-99-99'
						className='col-span-3'
					/>
				</div>
			</div>

			<Button>Сохранить</Button>
		</section>
	)
}

export default FormSetting
