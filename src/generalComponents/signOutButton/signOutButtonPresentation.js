import React from 'react';
import LinkButton from '../linkButton/linkButton';


const SignOutButtonPresentation = ({onClick}) => {
    return(
        <LinkButton
          text="Sign Out"
          linkTo='/createProfile'
          onClick= {onClick}
        />
    );
};

export default SignOutButtonPresentation;
