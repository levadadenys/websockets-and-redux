import * as types from './../actions/actionTypes';

export default function tablesStore (state = {
  tables: [],
  isConnected: false
}, action = {}) {
  const {type, payload} = action;

  switch (type) {
    case types.SUBSCRIBE:
      return {
        ...state,
        isConnected: true
      };

    case types.UNSUBSCRIBE:
      return {
        ...state,
        isConnected: false
      };

    case types.RECEIVE_TABLES:
      return {...state, tables: payload.tables.slice()};

    case types.ADD_TABLE:
    case types.TABLE_ADDED:
      const indx = state.tables.findIndex(
        item => item.id === payload.after_id) + 1;

      return {
        ...state,
        tables: indx
          ? [payload.table].concat(state.tables)
          : state.tables.slice(0, indx)
            .concat(payload.table)
            .concat(state.tables.slice(indx))

      };

    case types.UPDATE_TABLE:
    case types.TABLE_UPDATED:
      return {
        ...state,
        tables: state.tables.map(
          table => table.id === payload.table.id ? payload.table : table)
      };

    case types.UPDATE_FAILED:
      return state;

    case types.REMOVE_TABLE:
    case types.TABLE_REMOVED:
      return {
        ...state,
        tables: state.tables.filter(table => table.id !== payload.id)
      };
    case types.REMOVAL_FAILED:
      return state;

    default:
      return state;
  }
}
