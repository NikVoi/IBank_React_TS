import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { signInWithApple } from '../api/authApi'
import { getMessage } from '../model/constants'

export const useAppleLoginMutation = () => {
	return useMutation({
		mutationFn: () => signInWithApple(),
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
		onError: (error: any) => {
			console.error('Ошибка авторизации через Apple:', error)
			toast.error('Ошибка!', {
				description: 'Не удалось выполнить авторизацию через Apple.',
			})
		},
	})
}
