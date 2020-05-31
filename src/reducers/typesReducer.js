import * as actionTypes from '../actions/actionTypes.js';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_TYPES:
      return [
        ...state,
        Object.assign({}, action.types)
      ];
      case actionTypes.EDIT_TYPES:
        var elementPos = state.map(function(x) {return x.id; }).indexOf(action.data.id);
        let dupState = [...state];
        dupState[elementPos] = action.data;
        console.log("dupState",action.data)
        return dupState;
      case actionTypes.DELETE_TYPES:
        return state.filter((data, i) => data.id !== action.id);
      default:
            return state;
    }
  };