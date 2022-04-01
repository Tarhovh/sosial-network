import { configureStore } from "@reduxjs/toolkit";

import reducer from "./features";

console.log(reducer);

const store = configureStore({ reducer });

store.subscribe(() => console.log(store.getState()));

export default store;

// import { createStore } from "redux";
// import { todos, todosReducer } from "./features/posts.feature";
// const store = createStore( todosReducer, todos)

// // console.log(store.getState());

// export default store;

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("todosRedux", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("todosRedux");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const store = createStore(todosReducer, loadFromLocalStorage());

// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;
