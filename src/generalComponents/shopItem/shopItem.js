import React, {useState, useEffect} from 'react';
import ShopItemPresentational from './shopItemPresentational';

function ShopItem({name, sprite, cost, description, onClick, id, playerAmount}){

    const [amount, setAmount] = useState(1);
    const canAfford = cost ? cost.amount * amount <= playerAmount : undefined;

    useEffect(() => {
        setAmount(1);
    }, [name, sprite, cost, description]);

    return (
        <ShopItemPresentational
            name={name}
            sprite={sprite}
            cost={cost}
            description={description}
            amount={amount}
            id={canAfford ? 'affordable' : 'unaffordable'}
            onClick={canAfford ? () => onClick(amount, name, cost, id) : undefined}
            onChange={e => setAmount((!isNaN(e.target.value) && e.target.value > 0) ? e.target.value : 1)}
        />
    );
}

export default ShopItem;
