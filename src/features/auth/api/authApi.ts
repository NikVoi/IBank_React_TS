import { auth, OAuthProvider } from '@/shared/lib/firebase'
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth'

export const registerWithEmail = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)
		const token = await userCredential.user.getIdToken()
		return { success: true, token }
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message }
		} else {
			return { success: false, message: 'Неизвестная ошибка' }
		}
	}
}

export const loginWithGoogleFirebase = async () => {
	const provider = new GoogleAuthProvider()
	try {
		const result = await signInWithPopup(auth, provider)
		const user = result.user
		return { success: true, user }
	} catch (error) {
		throw error
	}
}

export const signInWithApple = async () => {
	try {
		const provider = new OAuthProvider('apple.com')
		const result = await signInWithPopup(auth, provider)

		const user = result.user
		return {
			success: true,
			user,
			message: 'Успешная авторизация через Apple',
		}
	} catch (error) {
		console.error('Ошибка авторизации через Apple:', error)
		throw new Error('Не удалось выполнить авторизацию через Apple.')
	}
}

export const loginWithEmail = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		const token = await userCredential.user.getIdToken()
		console.log(token)
	} catch (error) {
		console.error('Ошибка при входе:', error)
	}
}
