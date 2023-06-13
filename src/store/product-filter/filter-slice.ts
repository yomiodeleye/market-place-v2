import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterData: []
  },
  reducers: {
    addFilter(state, { payload }) {
      const itemIndex = state.filterData.findIndex(
        (item: any) => item.group === payload.group && item.key === payload.key
      )
      if (itemIndex === -1) {
        // @ts-ignore
        state.filterData = [payload, ...state.filterData]
      } else {
        const filterStateClone = JSON.parse(JSON.stringify(state.filterData))
        filterStateClone[itemIndex] = payload
        state.filterData = filterStateClone
      }
    },
    removeFilter(state, action) {
      const { key } = action.payload
      state.filterData = state.filterData.filter(
        (singleData: any) => singleData.key !== key
      )
    },

    clearAll(state) {
      state.filterData = []
    }
  }
})

export const filterActions = filterSlice.actions

export default filterSlice
