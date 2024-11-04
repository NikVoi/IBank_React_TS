import AuthSettings from '@/features/authSettings/AuthSettings'
import { FC } from 'react'

interface Props {
	className?: string
}

const AuthSettingPage: FC<Props> = ({ className }) => {
	return (
		<section className='flex justify-center items-center h-full'>
			<AuthSettings />
		</section>
	)
}

export default AuthSettingPage
