import { Table } from '@/shared/ui/table'
import { useTransactionTable } from '../../hooks/hooks'
import { ColumnVisibilityDropdown } from '../ColumnVisibilityDropdown/ColumnVisibilityDropdown'
import { DataTableBody } from '../DataTableBody/DataTableBody'
import { DataTableHeader } from '../DataTableHeader/DataTableHeader'

export const DataTable = () => {
	const { table } = useTransactionTable()

	return (
		<section className='w-full'>
			<div className='flex items-center py-4'>
				<ColumnVisibilityDropdown table={table} />
			</div>
			<div className='rounded-xl'>
				<Table>
					<DataTableHeader table={table} />
					<DataTableBody table={table} />
				</Table>
			</div>
		</section>
	)
}

export default DataTable
