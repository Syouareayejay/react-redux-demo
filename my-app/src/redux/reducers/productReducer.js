import {ActionTypes} from '../contants/action-types'
const initialState = {
    products: [{
        id:1,
        title: 'Patrick Bateman',
        category: 'Sigma'
    }]
}
export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}