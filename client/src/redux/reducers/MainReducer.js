import {
  SAVE_DATA, TOGGLE_CLASS_LAST_VERSION,
  NAVBAR_GET_SEARCH_INPUT_VALUE,
  NAVBAR_SEARCH_INPUT_RESET_VALUE,
  NAVBAR_GET_SORT_VALUE,
  CHANGE_ELECT_VALUE,
  GET_ELECT_FROM_RECIPE,
  SAVE_RECIPE_DATA,
 } from '../actions/mainActions';

const initialState = {
  data: '',
  show_last_version: false,
  navbarSearchValue: '',
  navbarSortValue: 'date',
  elect_value: 0,
  recipe_data: '',
}

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.value
      }
    case TOGGLE_CLASS_LAST_VERSION:
      const lastVersionBool = state.show_last_version === true ? false : true;
      return {
        ...state,
        show_last_version: lastVersionBool
      }
    case NAVBAR_GET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        navbarSearchValue:action.value
      }
    case NAVBAR_SEARCH_INPUT_RESET_VALUE:
      return {
        ...state,
        navbarSearchValue: ''
      }
    case NAVBAR_GET_SORT_VALUE:
      return {
        ...state,
        navbarSortValue: action.value
      }
    case CHANGE_ELECT_VALUE:
      return {
        ...state,
        elect_value: action.value
      }
    case GET_ELECT_FROM_RECIPE:
      return {
        ...state,
        elect_value: action.value
      }
    case SAVE_RECIPE_DATA:
      return {
        ...state,
        recipe_data: [action.value]
      }
    default:
      return state
  }
}
