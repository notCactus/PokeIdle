import { connect } from 'react-redux'
import SidebarPresentation from './sidebarPresentation';

const mapDispatchToProps = (dispatch) => ({
    setView: (view) => dispatch({
        type: 'SET_VIEW',
        view: view
    })
});

const mapStateToProps = (state) => {
    return {
      view: state.view
    }
};

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarPresentation);
export default Sidebar;