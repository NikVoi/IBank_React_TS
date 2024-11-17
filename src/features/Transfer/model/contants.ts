import { Payment } from '@/entities/Transaction/model/types'

export const TEST_DATA: Payment[] = [
	{
		id: '1',
		email: 'test@gmail.com',
		type: 'Sent',
		amount: 500,
		currency: 'USD',
		status: 'Success',
		category: 'Subscription',
		person: { name: 'John Doe', avatarUrl: 'https://github.com/shadcn.png' },
		date: '2023-08-28',
	},
	{
		id: '2',
		email: 'test2@gmail.com',
		type: 'Received',
		amount: 1500,
		currency: 'USD',
		status: 'Pending',
		category: 'Invoice',
		person: { name: 'Jane Smith' },
		date: '2023-08-27',
	},
]
