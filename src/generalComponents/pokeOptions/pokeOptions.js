import {connect} from 'react-redux';
import PokeOptionsPresentational from './pokeOptionsPresentational';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.trainer[ownProps.roster ? 'roster' : 'pcRoster'][ownProps.index],
    itemlist: state.trainer.items,
    roster: ownProps.roster,
    index: ownProps.index
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMoveToPC: (pokemon) => {
    const action = dispatch({
      type:'REMOVE_FROM_ROSTER',
      index: ownProps.index
    });
    if (true/*action.error !== 'UNDERFLOW'*/){
      dispatch({
        type:'ADD_TO_PC',
        pokemon: pokemon
      });
    }
  },
  onMoveToRoster: (pokemon) => {
    const action = dispatch({
      type:'ADD_TO_ROSTER',
      pokemon: pokemon
    });
    if (action.error !== 'OVERFLOW'){
      dispatch({
        type:'REMOVE_FROM_PC',
        index: ownProps.index
      });
    }
  }
})

const PokeOptions = connect(mapStateToProps, mapDispatchToProps)(PokeOptionsPresentational);

export default PokeOptions;
