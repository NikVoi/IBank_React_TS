import { AuthSlider } from '@/features/auth/ui'
import Auth from '@/features/auth/ui/AuthLayout/AuthLayout'

const AuthPage = () => {
	return (
		<section className='flex flex-row-reverse w-full h-screen max-h-screen'>
			<Auth />
			<AuthSlider />
		</section>
	)
}

export default AuthPage
