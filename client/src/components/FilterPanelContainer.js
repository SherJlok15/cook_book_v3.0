import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import { navbarGetSortValue } from '../redux/actions/mainActions';

function mapStateToProps(state) {
  return {
    navbarSortValue: state.main.navbarSortValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navbarGetSortValue: (value) => dispatch(navbarGetSortValue(value)),
  }
}



const FilterPanelContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
export default FilterPanelContainer;
