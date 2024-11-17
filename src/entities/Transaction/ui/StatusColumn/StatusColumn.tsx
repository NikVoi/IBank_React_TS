export const StatusColumn = {
	accessorKey: 'status',
	header: () => <div className='text-center'>status</div>,
	cell: ({ row }: any) => (
		<div className='text-center font-medium'>{row.getValue('status')}</div>
	),
}
