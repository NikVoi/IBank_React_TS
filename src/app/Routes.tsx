import {
	SettingsAccount,
	SettingsAppearance,
	SettingsNotifications,
	SettingsProfile,
} from '@/features/Settings/ui'
import {
	AccountPage,
	AuthPage,
	ChatPage,
	CurrencyPage,
	DashboardPage,
	SettingsPage,
	SpendingPage,
	TransferPage,
} from '@/pages'
import RegisterPage from '@/pages/RegisterPage/RegisterPage'

import { ROUTES, SETTINGS_ROUTES } from '@/shared/constant/Routes'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: ROUTES.AUTH,
		element: <AuthPage />,
	},
	{
		path: ROUTES.REGISTER,
		element: <RegisterPage />,
	},
	{
		path: ROUTES.DASHBOARD,
		element: <DashboardPage />,
		children: [
			{
				path: ROUTES.ACCOUNT,
				element: <AccountPage />,
			},
			{
				path: ROUTES.TRANSFER,
				element: <TransferPage />,
			},
			{
				path: ROUTES.SPENDING,
				element: <SpendingPage />,
			},
			{
				path: ROUTES.CURRENCY,
				element: <CurrencyPage />,
			},
			{
				path: ROUTES.SETTINGS,
				element: <SettingsPage />,
				children: [
					{ path: SETTINGS_ROUTES.ACCOUNT, element: <SettingsAccount /> },
					{ path: SETTINGS_ROUTES.PROFILE, element: <SettingsProfile /> },
					{ path: SETTINGS_ROUTES.APPEARANCE, element: <SettingsAppearance /> },
					{
						path: SETTINGS_ROUTES.NOTIFICATIONS,
						element: <SettingsNotifications />,
					},
				],
			},
			{
				path: ROUTES.CHAT,
				element: <ChatPage />,
			},
		],
	},
])
