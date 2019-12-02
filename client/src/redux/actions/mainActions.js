import axios from 'axios';
export const SAVE_DATA = 'save_data';
export const TOGGLE_CLASS_LAST_VERSION = 'toggele_class_last_version';
export const NAVBAR_GET_SEARCH_INPUT_VALUE = 'navbar_get_search_input_value';
export const NAVBAR_SEARCH_INPUT_RESET_VALUE = 'navbar_search_input_reset_value';
export const NAVBAR_GET_SORT_VALUE = 'navbar_get_sort_value';
export const CHANGE_ELECT_VALUE = 'change_elect_value';
export const GET_ELECT_FROM_RECIPE = 'get_elect_from_recipe';
export const SAVE_RECIPE_DATA = 'save_recipe_data';

export function loadData() {
  return(dispatch) => {
    axios.get('http://localhost:5000/recipes')
      .then(res => {
        dispatch(saveData(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

export function saveData(value){
  return {
    type: SAVE_DATA,
    value
  }
};

export function toggleClassLastVersion(){
  return {
    type: TOGGLE_CLASS_LAST_VERSION,
  }
};

export function navbarGetSearchInputValue(value){
  return {
    type: NAVBAR_GET_SEARCH_INPUT_VALUE,
    value
  }
};

export function navbarSearchInputResetValue(){
  return {
    type: NAVBAR_SEARCH_INPUT_RESET_VALUE,
  }
};

export function navbarGetSortValue(value){
  return {
    type: NAVBAR_GET_SORT_VALUE,
    value
  }
};

export function changeElectValue(value){
  return {
    type: CHANGE_ELECT_VALUE,
    value
  }
};

export function getElectValue(value, id) {
  return(dispatch) => {
    const elect_value = {
      elect: value === 1 ? 0 : 1
    }
    axios.post('http://localhost:5000/recipes/updateelect/'+id, elect_value)
      .then(res => {
        dispatch(changeElectValue(elect_value.elect))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

export function getElectFromRecipe(value){
  return {
    type: GET_ELECT_FROM_RECIPE,
    value
  }
};

export function saveRecipeData(value){
  return {
    type: SAVE_RECIPE_DATA,
    value
  }
};

export function loadRecipeData(id) {
  return(dispatch) => {
    axios.get('http://localhost:5000/recipes/'+id)
      .then(res => {
        dispatch(saveRecipeData(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};
