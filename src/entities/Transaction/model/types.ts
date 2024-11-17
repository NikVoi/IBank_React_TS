export interface Person {
	name: string
	avatarUrl?: string // Поле может быть необязательным
}

export interface Payment {
	id: string
	email: string
	type: 'Sent' | 'Received'
	amount: number
	currency: string
	status: 'Success' | 'Pending' | 'Failed'
	category: string
	person: Person
	date: string
}
