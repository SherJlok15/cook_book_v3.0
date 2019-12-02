import { connect } from 'react-redux';
import NavBar from './NavBar';
import {
  navbarGetSearchInputValue,
  navbarSearchInputResetValue,
} from '../redux/actions/mainActions';

function mapStateToProps(state) {
  return {
    navbarSearchValue: state.main.navbarSearchValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navbarGetSearchInputValue: (value) => dispatch(navbarGetSearchInputValue(value)),
    navbarSearchInputResetValue: () => dispatch(navbarSearchInputResetValue()),
  }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;
