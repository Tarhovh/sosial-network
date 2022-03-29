export const todos = [
    {
      id: Math.random(),
      text: "Learn React",
    },
  ];
  
  export function todosReducer(state = [], action) {
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