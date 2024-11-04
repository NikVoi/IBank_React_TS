import Account from '@/pages/AccountPage/Account'
import AuthPage from '@/pages/AuthPage/AuthPage'
import Chat from '@/pages/ChatPage/Chat'
import Currency from '@/pages/CurrencyPage/Currency'
import DashboardPage from '@/pages/DashboardPage/DashboardPage'
import Settings from '@/pages/SettingsPage/Settings'
import Spending from '@/pages/SpendingPage/Spending'
import Transfer from '@/pages/TransferPage/Transfer'
import { ROUTES } from '@/shared/constant/Routes'
import { createBrowserRouter } from 'react-router-dom'

const { VITE_NAV_AUTH, VITE_NAV_DASHBOARD } = import.meta.env

export const router = createBrowserRouter([
	{
		path: VITE_NAV_AUTH,
		element: <AuthPage />,
	},
	{
		path: VITE_NAV_DASHBOARD,
		element: <DashboardPage />,
		children: [
			{
				path: ROUTES.ACCOUNT,
				element: <Account />,
			},
			{
				path: ROUTES.TRANSFER,
				element: <Transfer />,
			},
			{
				path: ROUTES.SPENDING,
				element: <Spending />,
			},
			{
				path: ROUTES.CURRENCY,
				element: <Currency />,
			},
			{
				path: ROUTES.SETTINGS,
				element: <Settings />,
			},
			{
				path: ROUTES.CHAT,
				element: <Chat />,
			},
		],
	},
])
