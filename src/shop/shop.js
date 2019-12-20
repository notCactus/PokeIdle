import { connect } from 'react-redux';
import FundsPresentational from './fundsPresentational';

const mapStateToProps = (state) => {
    return {
        coins: state.trainer.currency,
        poke: getItemQuantity(state.trainer.items, 'poke-ball'),
        great: getItemQuantity(state.trainer.items, 'great-ball'),
        ultra: getItemQuantity(state.trainer.items, 'ultra-ball')
    }
}

const getItemQuantity = (items, id) => {
    const qnty = items.filter(item => item.id === id)[0].amount;
    return qnty ? qnty : 0;
}
const mapDispatchToProps = (dispatch) => ({
    onPurchase: (newName) => dispatch ({
        type: 'SET_USERNAME',
        username: newName,
    })
});

const Shop = connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
export default Shop;