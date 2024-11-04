import SideBar from '@/widgets/sideBar/ui/SideBar'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const DashboardPage = () => {
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

			<div className='flex-1 p-4'>
				{/* Outlet отображает текущий вложенный маршрут */}
				<Outlet />
			</div>
		</section>
	)
}

export default DashboardPage
