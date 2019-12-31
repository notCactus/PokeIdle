import {connect} from 'react-redux';
import hpRestoreOf from '../../helperFunctions/hpRestoration';
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
    let action = dispatch({
      type:'REMOVE_FROM_ROSTER',
      index: ownProps.index
    });
    if (!action.error){
      action = dispatch({
        type:'ADD_TO_PC',
        pokemon: pokemon
      });
      if (action.error){
        dispatch({
          type:'ADD_TO_ROSTER',
          pokemon: pokemon
        })
      }
    }
    return action.error;
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
    return action.error;
  },
  onUseItem: (id) => {
    const action = dispatch({
      type: ownProps.roster ? 'RESTORE_HP_ROSTER' : 'RESTORE_HP_PC',
      index: ownProps.index,
      hp: hpRestoreOf(id)
    });
    if (action.error !== 'HP_FULL'){
      dispatch({
        type: 'REMOVE_ITEMS',
        item:{
          id: id,
          amount: 1
        }
      });
    }
    return action.error;
  },
  onRelease: () => {
    const action = dispatch({
      type:ownProps.roster ? 'REMOVE_FROM_ROSTER' : 'REMOVE_FROM_PC',
      index: ownProps.index
    });
    return action.error;
  }
})

const PokeOptions = connect(mapStateToProps, mapDispatchToProps)(PokeOptionsPresentational);

export default PokeOptions;
