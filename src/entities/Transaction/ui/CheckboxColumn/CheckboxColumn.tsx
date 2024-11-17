import { Checkbox } from '@/shared/ui/checkbox'
import { HeaderContext } from '@tanstack/react-table'

export const CheckboxColumn = {
	id: 'select',
	header: ({ table }: HeaderContext<any, any>) => (
		<Checkbox
			checked={
				table.getIsAllPageRowsSelected() ||
				(table.getIsSomePageRowsSelected() && 'indeterminate')
			}
			onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
			aria-label='Select all'
		/>
	),
	cell: ({ row }: any) => (
		<Checkbox
			checked={row.getIsSelected()}
			onCheckedChange={value => row.toggleSelected(!!value)}
			aria-label='Select row'
		/>
	),
	enableSorting: false,
	enableHiding: false,
}
