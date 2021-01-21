// import { ADD_TODO, TOGGLE_TODO, TodoActionTypes } from '../types/types';

// const todos = (state = [], action: TodoActionTypes) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           isCompleted: false,
//         },
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo) => (todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
//     default:
//       return state;
//   }
// };

// export default todos;
export {};
