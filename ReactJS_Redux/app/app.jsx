import React from "react";
import ReactDOM from "react-dom";
import List from "List";
import { Provider } from 'react-redux';
import store from './storeConfig.js';

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>
    ,
    document.getElementById('root')
);


require('./storeConfig.js');


/*
    toan tu ...
    pure function
*/

/* toan tu ...
var obj = {
    name: "Minh Nguyen",
    age: 22
}

// var obj2 = obj;
// var obj2 = {...obj, height: 170};
var obj2 = {...obj, age: 20};

obj.name = "Van Minh Nguyen";

// console.log(obj2);

var mang = [5, 3, 8 , 5];
var arr = [7, 6, ...mang, 9, 0];
mang[0] = 1000;
console.log('Array: ', arr);
console.log('Mang: ', mang);
*/

/* pure function
var c = 100;
var add = (a, b) => {
    // c = 50, không được thay đổi giá trị trong pure func
    //Async task, không chưa tác vụ bất đồng bộ
    //One input => 1 output
    return a + b
};
console.log(add(5, 6));
*/


