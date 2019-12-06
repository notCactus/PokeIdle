import React from 'react';

function HeaderPresentational({title}){
    return(
        <div className="PokeHeader">
          <h1>{title}</h1>
        </div>
      );
}

export default HeaderPresentational;