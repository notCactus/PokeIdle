export default function reducer(state = {}, action){
    return {
        view: view(state.view, action)
    };
}

function view(state = 'PROFILE', action){
    if (action.type = 'SET_VIEW')
        return action.view;
    else
        return state;
}