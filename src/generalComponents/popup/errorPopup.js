import React from 'react';
import Popup from '../popup/popup';
import ConfirmButton from '../confirmWindow/confirmWindow';

function ErrorPopup({title, errorMsg, onExit}){
    return <Popup
            title={title}
            exitFunction={onExit}
            view={
                <ConfirmButton
                    toConfirm={errorMsg}
                    confirmFunction={onExit}
                />
            }
        />
} export default ErrorPopup;