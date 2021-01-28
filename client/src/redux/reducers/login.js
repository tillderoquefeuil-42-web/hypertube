import ActionTypes from '../../constants/ActionTypes';

const LOGIN_ACTIONS = ActionTypes.LOGIN;

export const initialState = {
    id              : null, 
    name            : "",
    name_set        : false,
    room            : "",
    active_rooms    : [],
    room_set        : false,
    logged          : false,
    start           : false,
    owner           : false,
    viewer          : false,
};
  
export const getLoginStateCopy = (state) => {
    let data = {};
  
    for (let i in initialState){
        data[i] = state[i];
    }
  
    return data;
}

const reducer = (state = initialState , action) => {

    let data = getLoginStateCopy(state);

    switch(action.type){
    // MANAGE ID
    case LOGIN_ACTIONS.GET_ID:
        data.id = action.player_id;
        return data;

    // MANAGE NAME
    case LOGIN_ACTIONS.UPDATE_NAME:
        data.name = action.login_name || (action.login_force? getDefaultName() : '');
        data.name_set = false;
        return data;
    case LOGIN_ACTIONS.SET_NAME:
        data.name_set = true;
        return data;

    default:
        return state
    }
}

export default reducer;