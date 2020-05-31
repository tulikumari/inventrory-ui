import * as actionTypes from './actionTypes';

export const createTypes = (types) => {
    return {
      type: actionTypes.CREATE_NEW_TYPES,
      types: types
    }
  };
export const editTypes = (data) => {
    return {
        type: actionTypes.EDIT_TYPES,
        data: data
    }
}
export const deleteTypes = (id) => {
  return {
      type: actionTypes.DELETE_TYPES,
      id: id
  }
}
export const addItems = (itemdata) => {
  return {
      type: actionTypes.ADDITEMS,
      itemdata: itemdata
  }
}
export const addFields = (itemdata) => {
  return {
      type: actionTypes.ADD_FIELDS,
      itemdata: itemdata
  }
}
export const editFields = (data) => {
  return {
      type: actionTypes.EDIT_FIELDS,
      data: data
  }
}
export const removeFields = (data,filed_id) => {
  return {
      type: actionTypes.EDIT_FIELDS,
      data: data,
      filed_id:filed_id
  }
}