import { useEffect } from "react";
import  app  from "../../myFireBase/myFireBase";


export const todos = [
    {
      id: Math.random(),
      text: "Learn React",
    },
  ];

 
  
  export function todosReducer(state = [], action) {
    // useEffect(() => {
    //   app.collection('posts')
     
    // })
    if (action.type === "add-new-toDo") {
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
        },
      ];
    }
   
    return state;
  }