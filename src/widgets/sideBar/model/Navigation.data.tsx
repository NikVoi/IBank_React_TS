import { PATH } from '@/shared/constant/Routes'
import { BiTransferAlt } from 'react-icons/bi'
import { BsBank, BsChatSquareDots } from 'react-icons/bs'
import { FaRegCreditCard } from 'react-icons/fa'
import { IoPieChartSharp } from 'react-icons/io5'
import { VscSettings } from 'react-icons/vsc'

export const navigation = [
	{
		id: 1,
		svg: <FaRegCreditCard />,
		title: 'Аккаунт',
		path: PATH.ACCOUNT,
	},
	{
		id: 2,
		svg: <BiTransferAlt />,
		title: 'Транзакции',
		path: PATH.TRANSFER,
	},
	{
		id: 3,
		svg: <IoPieChartSharp />,
		title: 'Расходы',
		path: PATH.SPENDING,
	},
	{
		id: 4,
		svg: <BsBank />,
		title: 'Валюта',
		path: PATH.CURRENCY,
	},
	{
		id: 5,
		svg: <VscSettings />,
		title: 'Настройки',
		path: PATH.SETTINGS,
	},
	{
		id: 6,
		svg: <BsChatSquareDots />,
		title: 'Чат',
		path: PATH.CHAT,
	},
]
