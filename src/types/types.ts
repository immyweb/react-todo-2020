export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

// Constants

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Actions

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: ITodo[];
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
