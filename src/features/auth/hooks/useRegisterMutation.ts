import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { registerWithEmail } from '../api/authApi'
import { getMessage } from '../model/constants'

export const useRegisterMutation = () => {
	return useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			registerWithEmail(email, password),
		onSuccess: data => {
			console.log(data)
			data.success
				? toast.success('Успех!', {
						description: getMessage(data.message || ''),
				  })
				: toast.error('Ошибка!', {
						description: getMessage(data.message || ''),
				  })
		},
		onError: (error: any) => {},
	})
}
