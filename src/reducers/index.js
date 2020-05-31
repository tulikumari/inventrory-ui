import { combineReducers } from 'redux';
import types from './typesReducer';
import items from './itemsReducer';
import fields from './typesFields';

export default combineReducers({
    types: types,
    items: items,
    fields: fields
});