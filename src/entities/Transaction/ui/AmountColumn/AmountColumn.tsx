import { CellContext } from '@tanstack/react-table'
import { formatAmount } from '../../lib/formateAmount'

export const AmountColumn = {
	accessorKey: 'amount',
	header: () => <div className='text-center'>Amount</div>,
	cell: ({ row }: CellContext<any, string>) => {
		const amount = parseFloat(row.getValue('amount'))
		const formatted = formatAmount(amount)
		return <div className='text-center font-medium'>{formatted}</div>
	},
}
