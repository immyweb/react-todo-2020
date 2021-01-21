import React from 'react';

import Header from './ui/header/header';
// import TodoForm from './ui/todo-form/todo-form';
// import Todo from './ui/todo/todo';

import { AppContainer, TodoContainer } from './styles';

// import { todoData } from './data/dummy';

function App() {
  //   const [todos, setTodos] = React.useState(todoData);

  //   const addTodo = (text: string) => {
  //     const newTodos = [...todos, { text, isCompleted: false }];
  //     setTodos(newTodos);
  //   };

  //   const completeTodo = (index: number) => {
  //     const newTodos = [...todos];
  //     newTodos[index].isCompleted = true;
  //     setTodos(newTodos);
  //   };

  //   const removeTodo = (index: number) => {
  //     const newTodos = [...todos];
  //     newTodos.splice(index, 1);
  //     setTodos(newTodos);
  //   };

  return (
    <AppContainer>
      <TodoContainer>
        <Header />
      </TodoContainer>
    </AppContainer>
  );
}

export default App;
