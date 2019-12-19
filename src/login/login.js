import LoginContainer from './loginContainer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.createProfile.username,
        lvl: state.trainer.lvl,
        roster: state.trainer.roster,
        pcRoster: state.trainer.pcRoster,
        trainerStamina: state.trainer.stamina,
        trainerMaxStamina: state.trainer.maxStamina,
        trainerXp: state.trainer.xp,
        trainerMaxXp: state.trainer.maxXp,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUsername: (newName) => dispatch ({
        type: 'SET_USERNAME',
        username: newName,
    }),
    setCurrency: (amount) => dispatch ({
        type: 'SET_CURRENCY',
        currency: amount,
    }),
    setItems: (items) => dispatch ({
        type: 'SET_ITEMS',
        item: items,
    }),
    setLvl: (amount) => dispatch ({
        type: 'SET_LVL',
        lvl: amount,
    }),
    setPc: (pokemon) => dispatch ({
        type: 'SET_PC',
        pokemon: pokemon,
    }),
    setRoster: (pokemon) => dispatch ({
        type: 'SET_ROSTER',
        pokemon: pokemon,
    }),
    setStamina: (stamina) => dispatch ({
        type: 'SET_STAMINA',
        stamina: stamina,
    }),
});
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default Login;