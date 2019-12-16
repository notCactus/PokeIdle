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
    dispatch({
      type:'REMOVE_FROM_ROSTER',
      index: ownProps.index
    });
    dispatch({
      type:'ADD_TO_PC',
      pokemon: pokemon
    });
  },
  onMoveToRoster: (pokemon) => {
    dispatch({
      type:'REMOVE_FROM_PC',
      index: ownProps.index
    });
    dispatch({
      type:'ADD_TO_ROSTER',
      pokemon: pokemon
    });
  }
})

const PokeOptions = connect(mapStateToProps, mapDispatchToProps)(PokeOptionsPresentational);

export default PokeOptions;