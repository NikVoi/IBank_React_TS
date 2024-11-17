export const TypeColumn = {
	accessorKey: 'type',
	header: () => <div className='text-center'>type</div>,
	cell: ({ row }: any) => {
		return <div className='text-center font-medium'>{row.getValue('type')}</div>
	},
}
