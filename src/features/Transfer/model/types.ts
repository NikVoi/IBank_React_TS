import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
} from '@tanstack/react-table'

export interface ITransferState {
	sorting: SortingState
	columnFilters: ColumnFiltersState
	columnVisibility: VisibilityState
	setSorting: (sorting: SortingState) => void
	setColumnFilters: (columnFilters: ColumnFiltersState) => void
	setColumnVisibility: (columnVisibility: VisibilityState) => void
}
