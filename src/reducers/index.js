import * as actions from '../actions';

const initialState = {
    data: {}
}
export const mainReducer = (state = initialState, action) => {
    if(action.type === actions.FETCH_WEATHER_SUCCESS) {
        console.log("FETCH SUCCESS");
        console.log(action.payload);
        return Object.assign({}, state, action.payload);
    }
    return state;

}