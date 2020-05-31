import * as actionTypes from '../actions/actionTypes.js';

export default (state = [], action) => {
    switch (action.type){
            
      case actionTypes.ADD_FIELDS:
        let dupState = [...state];
        let element =  action.itemdata;
        console.log("dupState.indexOf(element)",dupState.indexOf(element));
        //if (dupState.indexOf(element) === -1) dupState.push(element);
        if (!dupState.find(o => o.item_id === element.item_id && o.type_id === element.type_id && o.field_id === element.field_id))
        dupState.push(element);
        return dupState;   
      case actionTypes.EDIT_FIELDS:
        var elementPos = state.map(function(x) {return x.id; }).indexOf(action.data.id);
        let dupState2 = [...state];
        dupState2[elementPos] = action.data;
        return dupState2;
      default:
            return state;
    }
  };