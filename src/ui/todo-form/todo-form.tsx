// import React from 'react';

// import { TodoFormContainer } from './styles';

// interface IProps {
//   addTodo: (text: string) => void;
// }

// const TodoForm: React.FC<IProps> = ({ addTodo }) => {
//   const [value, setValue] = React.useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     if (!value) return;
//     addTodo(value);
//     setValue('');
//     e.preventDefault();
//   };

//   return (
//     <TodoFormContainer onSubmit={handleSubmit}>
//       <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>
//     </TodoFormContainer>
//   );
// };

// export default TodoForm;
