import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

export const ActionsColumn = {
	id: 'actions',
	enableHiding: false,
	cell: ({ row }: any) => {
		const payment = row.original
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<span className='sr-only '>Open menu</span>
						<MoreHorizontal />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem
						onClick={() => navigator.clipboard.writeText(payment.id)}
					>
						Copy payment ID
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>View customer</DropdownMenuItem>
					<DropdownMenuItem>View payment details</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
}
