import { SETTINGS_ROUTES } from '@/shared/constant/Routes'

export const SETTINGS_TITLES = {
	SETTINGS: 'Настройки',
	PROFILE: 'Профиль',
	ACCOUNT: 'Счет',
	APPEARANCE: 'Внешность',
	NOTIFICATIONS: 'Уведомления',
}

export const SETTINGS_DESCRIPTIONS = {
	SETTINGS:
		'Измените настройки своей учетной записи и настройте параметры электронной почты.',
	PROFILE: 'Именно так другие будут видеть вас на сайте.',
	ACCOUNT:
		'Обновите настройки своей учетной записи. Установите предпочитаемый язык и часовой пояс.',
	APPEARANCE:
		'Настройте внешний вид приложения. Автоматическое переключение между дневной и ночной темами.',
	NOTIFICATIONS: 'Настройте способ получения уведомлений.',
}

export const SETTING_NAVIGATION = [
	{
		id: 1,
		title: SETTINGS_TITLES.ACCOUNT,
		path: SETTINGS_ROUTES.ACCOUNT,
	},
	{
		id: 2,
		title: SETTINGS_TITLES.PROFILE,
		path: SETTINGS_ROUTES.PROFILE,
	},
	{
		id: 3,
		title: SETTINGS_TITLES.APPEARANCE,
		path: SETTINGS_ROUTES.APPEARANCE,
	},
	{
		id: 4,
		title: SETTINGS_TITLES.NOTIFICATIONS,
		path: SETTINGS_ROUTES.NOTIFICATIONS,
	},
]
