import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { CellContext } from '@tanstack/react-table'
import { Payment, Person } from '../../model/types'

export const PeopleColumn = {
	accessorKey: 'person',
	header: 'PEOPLE',
	cell: ({ getValue }: CellContext<Payment, Person>) => {
		const person = getValue()
		return (
			<div className='flex items-center gap-2'>
				<Avatar>
					<AvatarImage src={person?.avatarUrl || ''} alt={person?.name} />
					<AvatarFallback>{person?.name?.[0] || '?'}</AvatarFallback>
				</Avatar>
				<span>{person?.name || 'Unknown'}</span>
			</div>
		)
	},
}
