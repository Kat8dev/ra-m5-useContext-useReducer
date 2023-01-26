import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  currentPage: 1,
  itemPerPage: 10,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ITEMPERPAGE: 'SET_ITEMPERPAGE',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })

    case Actions.SET_ITEMPERPAGE:
      return createNextState(state, (draft) => {
        draft.itemPerPage = Number(action.payload)
      })

    default:
      return state
  }
}