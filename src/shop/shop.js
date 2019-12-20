import { connect } from 'react-redux';
import ShopContainer from './shopContainer';
import {createPokemon} from '../factory/pokemonFactory';

const mapStateToProps = (state) => {
    return {
        coins: state.trainer.currency,
        poke: getItemQuantity(state.trainer.items, 'poke-ball'),
        great: getItemQuantity(state.trainer.items, 'great-ball'),
        ultra: getItemQuantity(state.trainer.items, 'ultra-ball')
    }
}

const getItemQuantity = (items, id) => {
    const item = items.filter(item => item.id === id)[0];
    return item ? item.amount : 0;
}

const currencyToId = (currency) => {
    switch (currency){
        case 'Poké Ball':
            return 'poke-ball';
        case 'Great Ball':
            return 'great-ball';
        case 'Ultra Ball':
            return 'ultra-ball';
        default:
            return '';
    }
}
const mapDispatchToProps = (dispatch) => ({
    onPurchase: (id, amount, cost) => {
        debugger;
        if (cost.currency === 'coin'){
            const action = dispatch ({
                type: 'REMOVE_CURRENCY',
                currency: cost.amount * amount,
            });
            if (action.error !== 'UNDERFLOW'){
                dispatch({
                    type: 'ADD_ITEMS',
                    item: {id:id, amount:amount}
                })
            }
        } else {
            const action = dispatch ({
                type: 'REMOVE_ITEMS',
                item: {id:currencyToId(cost.currency), amount: cost.amount * amount},
            });
            if (action.error !== 'UNDERFLOW'){
                for (let i = 0; i < amount; i++){
                    dispatch({
                        type:'ADD_TO_PC',
                        pokemon:createPokemon({id:id})
                    });
                }
            }
        }
    }
});

const Shop = connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
export default Shop;