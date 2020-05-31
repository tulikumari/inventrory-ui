import * as actionTypes from '../actions/actionTypes.js';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.ADDITEMS:
        let flag = false;
        let dupState = [];
        state.forEach(function(val) {
          if (val.types_id===action.itemdata) {
            flag = true;
          }
        });
        console.log("flag",flag)
        if(flag === true) {
          dupState = [...state];
        } else {
          let fieldLength = state.length;
          let lastFieldId = 0;
          if(fieldLength > 0) {
            lastFieldId = state[fieldLength-1].id;
            lastFieldId = ++lastFieldId;
          }
          dupState = [...state,Object.assign({},  {id: lastFieldId,types_id:action.itemdata})];
        }
       
        return dupState;
      default:
            return state;
    }
  };