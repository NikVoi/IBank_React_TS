import Auth from '@/features/auth/ui/Auth'
import Slider from '@/features/authSlider/ui/Slider'

const AuthPage = () => {
	return (
		<section className='flex flex-row-reverse w-full h-screen max-h-screen'>
			<Auth />
			<Slider />
		</section>
	)
}

export default AuthPage
