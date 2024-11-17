import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ITransferState } from './types'

const useTransferStore = create<ITransferState>()(
	persist(
		set => ({
			sorting: [],
			columnFilters: [],
			columnVisibility: {},
			setSorting: sorting => set({ sorting }),
			setColumnFilters: filters => set({ columnFilters: filters }),
			setColumnVisibility: visibility => set({ columnVisibility: visibility }),
		}),
		{
			name: 'transfer-storage',
		}
	)
)

export default useTransferStore
