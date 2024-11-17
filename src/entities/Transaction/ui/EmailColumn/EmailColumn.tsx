import { Button } from '@/shared/ui/button'
import { ArrowUpDown } from 'lucide-react'

export const EmailColumn = {
	accessorKey: 'email',
	header: ({ column }: any) => {
		return (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Email
				<ArrowUpDown />
			</Button>
		)
	},
	cell: ({ row }: any) => (
		<div className='lowercase'>{row.getValue('email')}</div>
	),
}
