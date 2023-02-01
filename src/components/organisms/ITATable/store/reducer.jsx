import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  originalData: [],
  currentData: [],
  columns: [],
  currentPage: 1,
  itemPerPage: 10,
  dataPerDistrict: [],
}

export const Actions = {
  SET_CURRENTDATA: 'SET_CURRENTDATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ITEMPERPAGE: 'SET_ITEMPERPAGE',
  SET_VIVIENDAS: 'SET_VIVIENDAS',
  SET_BARRIOS: 'SET_BARRIOS',
  SET_DATAPERDISTRICT: 'SET_DATAPERDISTRICT',
  SET_ORIGINALDATA: 'SET_SET_ORIGINALDATA',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENTDATA:
      return createNextState(state, (draft) => {
        draft.currentData = action.payload
      })

    case Actions.SET_ORIGINALDATA:
      return createNextState(state, (draft) => {
        draft.originalData = [...state.currentData]
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

    case Actions.SET_VIVIENDAS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
        draft.currentData = state.originalData
      })

    case Actions.SET_BARRIOS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
        draft.currentData = state.dataPerDistrict
      })

    case Actions.SET_DATAPERDISTRICT:
      return createNextState(state, (draft) => {
        draft.dataPerDistrict = action.payload
      })

    default:
      return state
  }
}
