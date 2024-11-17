import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { loginWithGoogleFirebase } from '../api/authApi'

export const useGoogleLoginMutation = () => {
	return useMutation({
		mutationFn: () => loginWithGoogleFirebase(),
		onSuccess: data => {
			console.log(data)
			data.success ? toast.success('Успех!') : toast.error('Ошибка!')
		},
		onError: (error: any) => {
			console.error('Ошибка авторизации через Google:', error)
			toast.error('Ошибка!', {
				description: 'Не удалось выполнить авторизацию через Google.',
			})
		},
	})
}
