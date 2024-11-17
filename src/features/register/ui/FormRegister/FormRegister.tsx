import { PLACEHOLDER } from '@/shared/constant/Input'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Popover, PopoverTrigger } from '@/shared/ui/popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import { PopoverContent } from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { FC, useState } from 'react'
import styles from './FormRegister.module.scss'

interface Props {
	className?: string
}

const FormRegister: FC<Props> = ({ className }) => {
	const [date, setDate] = useState<Date>()

	return (
		<section className={styles.settingForm}>
			<div className={styles.wrapper}>
				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='name'>Логин</Label>
					<Input
						id='login'
						placeholder={PLACEHOLDER.LOGIN}
						className='col-span-3'
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='name'>Имя</Label>
					<Input
						id='name'
						placeholder={PLACEHOLDER.NAME}
						className='col-span-3'
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='lastName'>Фамилия</Label>
					<Input
						id='lastName'
						placeholder={PLACEHOLDER.LAST_NAME}
						className='col-span-3'
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='Middle name'>Отчество</Label>
					<Input
						id='Middle name'
						placeholder={PLACEHOLDER.MIDDLE_NAME}
						className='col-span-3'
					/>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='tel'>телефон</Label>
					<Input
						id='tel'
						placeholder={PLACEHOLDER.TELEPHONE}
						className='col-span-3'
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='tel'>Паспорт</Label>
					<Input
						id='tel'
						placeholder={PLACEHOLDER.PASSPORT}
						className='col-span-3'
					/>
				</div>
				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='tel'>Дата</Label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-[280px] justify-start text-left font-normal',
									!date && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{date ? format(date, 'PPP') : <span>{PLACEHOLDER.DATE}</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0'>
							<Calendar
								mode='single'
								selected={date}
								onSelect={setDate}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
			</div>
			<Button>Сохранить</Button>
		</section>
	)
}

export default FormRegister
