import RosterViewPresentation from './rosterViewPresentation';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        roster: state.trainer.roster,
        pcRoster: state.trainer.pcRoster,
        loadedData: state.session.loadedData,
    }
}

const mapDispatchToProps = (dispatch) => ({
  swapInMain: (a, b) => dispatch ({
      type: 'SWAP_IN_MAIN_ROSTER',
      a: a,
      b: b,
  }),
  swapInPC: (a, b) => dispatch ({
      type: 'SWAP_IN_PC_ROSTER',
      a: a,
      b: b,
  }),
});

const RosterView = connect(mapStateToProps, mapDispatchToProps)(RosterViewPresentation);
export default RosterView;
