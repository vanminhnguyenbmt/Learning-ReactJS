var redux = require('redux');
import mangReducer from './mang.js';
import isAddingReducer from './isAdding.js';

var reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
});

export default reducer;