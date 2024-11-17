import SideBar from '@/widgets/sideBar/ui/SideBar'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const DashboardPage = () => {
	//TODO: Выенсти как хук ибо 2 раза используется

	const location = useLocation()
	const [activeComponent, setActiveComponent] = useState(location.pathname)

	useEffect(() => {
		setActiveComponent(location.pathname)
	}, [location.pathname])

	return (
		<section className={`flex w-full h-full`}>
			<SideBar
				activeComponent={activeComponent}
				setActiveComponent={setActiveComponent}
			/>

			<div className='flex-1'>
				<Outlet />
			</div>
		</section>
	)
}

export default DashboardPage
