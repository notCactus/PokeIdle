import React from 'react';
import LinkButton from '../linkButton/linkButton';


const SignOutButtonPresentation = ({text, onClick}) => {
    return(
        <LinkButton
          text={text}
          linkTo='/login'
          onClick= {onClick}
        />
    );
};

export default SignOutButtonPresentation;
