export interface IPerson {
	email: string
	passwordHash: string
}

export interface IAuthState {
	user: IPerson
	setUserEmail: (email: string) => void
	setUserPassword: (password: string) => void
	clearUser: () => void
}
