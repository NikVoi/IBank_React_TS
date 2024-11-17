import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { Table } from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'

interface ColumnVisibilityDropdownProps {
	table: Table<any>
}

export const ColumnVisibilityDropdown = ({
	table,
}: ColumnVisibilityDropdownProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='ml-auto'>
					Columns <ChevronDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{table
					.getAllColumns()
					.filter(column => column.getCanHide())
					.map(column => (
						<DropdownMenuCheckboxItem
							key={column.id}
							className='capitalize'
							checked={column.getIsVisible()}
							onCheckedChange={value => column.toggleVisibility(!!value)}
						>
							{column.id}
						</DropdownMenuCheckboxItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
