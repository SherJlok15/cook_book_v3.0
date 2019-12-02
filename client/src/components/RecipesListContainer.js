import { connect } from 'react-redux';
import RecipesList from './RecipesList';

function mapStateToProps(state) {
  return {
    data: state.main.data,
    navbarSearchValue: state.main.navbarSearchValue,
    navbarSortValue: state.main.navbarSortValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const RecipesListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesList);
export default RecipesListContainer;
