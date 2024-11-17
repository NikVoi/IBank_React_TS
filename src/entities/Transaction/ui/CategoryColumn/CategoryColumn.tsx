export const CategoryColumn = {
	accessorKey: 'category',
	header: () => <div className='text-center'>category</div>,
	cell: ({ row }: any) => {
		return (
			<div className='text-center font-medium'>{row.getValue('category')}</div>
		)
	},
}
