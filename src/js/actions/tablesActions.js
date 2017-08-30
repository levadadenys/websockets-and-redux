import * as types from './actionTypes';

export const removeTable = id => (dispatch, getState, emit) => {
  emit({
    $type: types.REMOVE_TABLE,
    id
  });

};
