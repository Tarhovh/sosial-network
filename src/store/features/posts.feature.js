// import { useEffect } from "react";
// import  app  from "../../myFireBase/myFireBase";
import { createSlice, nanoid } from "@reduxjs/toolkit";
// import myFireStore from "../../myFireBase";

// console.log(myFireStore.collection('posts'))

const initialState = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: "post",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push({
        ...payload,
        id: nanoid(),
        // isEdit: false,
        // isCompleted: false,
      });
    }
    
    // ,
    // removeItem: (state, { payload }) => {
    //   const newItems = state.items.filter((item) => item.id !== payload.id);
    //   state.items = newItems;
    // },

    // editItem: (state, { payload }) => {
    //   const newItems = state.items.map((item) =>
    //     item.id === payload.id ? { ...item, ...payload } : item
    //   );

    //   state.items = newItems;
    // },
  },
});

export const { addItem } = actions;

// export const selectTodoItems = createSelector((state) => state.todo.items);

// export const selectCompletedTodos = createSelector(
//   (state) => state.todo.items,
//   (items) => items.filter((item) => item.isCompleted)
// );

export default reducer;










// export const todos = [
//     {
//       id: Math.random(),
//       text: "Learn React",
//     },
//   ];

 
  
//   export function todosReducer(state = [], action) {
//     // useEffect(() => {
//     //   app.collection('posts')
     
//     // })
//     if (action.type === "add-new-toDo") {
//       return [
//         ...state,
//         {
//           id: Math.random(),
//           text: action.payload.text,
//         },
//       ];
//     }
   
//     return state;
//   }