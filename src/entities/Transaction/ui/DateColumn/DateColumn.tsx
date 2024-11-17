export const DateColumn = {
	accessorKey: 'date',
	header: () => <div className='text-center'>date</div>,
	cell: ({ row }: any) => {
		return <div className='text-center font-medium'>{row.getValue('date')}</div>
	},
}
