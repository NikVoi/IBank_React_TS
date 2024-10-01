import Auth from '@/components/shared/auth/Auth'
import Slider from '@/components/shared/slider-auth/Slider'

const AuthPage = () => {
	return (
		<section className='flex flex-row-reverse w-full h-full '>
			<Auth />
			<Slider />
		</section>
	)
}

export default AuthPage
