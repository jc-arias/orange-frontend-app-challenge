/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'navState',
  initialState: {
    current: {
      name: 'List',
      params: {}
    }
  },
  reducers: {
    changeState: (state, action) => {
      state.current.name = action.payload.name
      state.current.params = action.payload.params
    }
  }
})

export const {
  changeState
} = slice.actions

export default slice.reducer
