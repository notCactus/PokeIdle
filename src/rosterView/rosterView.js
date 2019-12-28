import RosterViewPresentation from './rosterViewPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        roster: state.trainer.roster,
        pcRoster: state.trainer.pcRoster,
        loadedData: state.session.loadedData,
    }
}

const RosterView = connect(mapStateToProps)(RosterViewPresentation);
export default RosterView;
