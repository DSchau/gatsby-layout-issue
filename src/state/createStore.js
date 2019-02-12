import { createStore as reduxCreateStore } from 'redux'

const initialState = {
  menuActive: false,
  loading: false,
  renderHero: 'all',
  renderHeroLoaded: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuActive: !state.menuActive,
        loading: state.menuActive ? false : true,
      }
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload,
      }
      break
  }

  return state
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
