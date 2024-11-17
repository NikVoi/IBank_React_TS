import '@/shared/styles/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './providers/Theme-provider'
import { router } from './Routes'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<RouterProvider router={router} />
				<Toaster richColors />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
