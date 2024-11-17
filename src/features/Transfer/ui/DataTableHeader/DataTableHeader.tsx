import { TableHead, TableHeader, TableRow } from '@/shared/ui/table'
import { Table, flexRender } from '@tanstack/react-table'

interface DataTableHeaderProps {
	table: Table<any>
}

export const DataTableHeader = ({ table }: DataTableHeaderProps) => {
	return (
		<TableHeader className=''>
			{table.getHeaderGroups().map(headerGroup => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map(header => (
						<TableHead
							key={header.id}
							className='bg-secondary last:rounded-tr-xl first:rounded-tl-xl '
						>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.header,
										header.getContext()
								  )}
						</TableHead>
					))}
				</TableRow>
			))}
		</TableHeader>
	)
}
