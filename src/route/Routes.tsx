import AuthPage from '@/pages/AuthPage'
import DashboardPage from '@/pages/DashboardPage'
import { createBrowserRouter } from 'react-router-dom'

const { VITE_NAV_AUTH, VITE_NAV_ACCOUNT } = import.meta.env

export const router = createBrowserRouter([
	{
		path: VITE_NAV_AUTH,
		element: <AuthPage />,
	},
	{
		path: VITE_NAV_ACCOUNT,
		element: <DashboardPage />,
	},
])
