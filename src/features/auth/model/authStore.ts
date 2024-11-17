import bcrypt from 'bcryptjs'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IAuthState } from './types'

const useAuthStore = create<IAuthState>()(
	persist(
		set => ({
			user: { email: '', passwordHash: '' },
			setUserEmail: email => set(state => ({ user: { ...state.user, email } })),
			setUserPassword: async (password: string) => {
				const hashedPassword = await bcrypt.hash(password, 10)
				set(state => ({
					user: { ...state.user, passwordHash: hashedPassword },
				}))
			},
			clearUser: () => set({ user: { email: '', passwordHash: '' } }),
		}),
		{
			name: 'auth-storage',
		}
	)
)

export default useAuthStore
