var redux = require('redux');
import reducer from 'reducer';

// var defaultState = {
//     mang: ['Android', 'IOS', 'NodeJS'],
//     isAdding: false
// };
// var reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
//             return { ...state, isAdding: !state.isAdding }
//         case 'ADD_ITEM':
//             return { ...state, mang: [...state.mang, action.item] }
//         case 'REMOVE_ITEM':
//             return { ...state, mang: state.mang.filter((e, i) => i != action.index) }
//         default:
//             return state;
//     }
// }

/* viết ra file riêng rồi import vô
    var mangReducer = (state = ['Android', 'IOS', 'NodeJS'], action) => {
            switch (action.type) {
            case 'ADD_ITEM':
                return [...state, action.item]
            case 'REMOVE_ITEM':
                return state.filter((e, i) => i != action.index)
            default:
                return state;
        }
    }

    var isAddingReducer = (state = false, action) => {
            switch (action.type) {
            case 'TOGGLE_IS_ADDING':
                return !state
            default:
                return state;
        }
    }

    var reducer = redux.combineReducers({
        mang: mangReducer,
        isAdding: isAddingReducer
    });
*/

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => {
//     var str = store.getState();
//     document.getElementById('p-detail').innerHTML = JSON.stringify(str);
// });


// console.log(store.getState());
// store.dispatch({ type: 'TOGGLE_IS_ADDING' });
// console.log(store.getState());

// store.dispatch({
//     type: 'ADD_ITEM',
//     item: 'Unity'
// });
// console.log(store.getState());

// store.dispatch({
//     type: 'REMOVE_ITEM',
//     index: 1
// });
// console.log(store.getState());

export default store;