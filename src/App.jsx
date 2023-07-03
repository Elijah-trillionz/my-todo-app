import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { title: 'Buy groceries on the way back', id: 1, isCompleted: false },
    { title: 'Attend meeting with John Doe', id: 2, isCompleted: false },
    { title: "Review Jason's code", id: 3, isCompleted: true },
  ]);
  const [todoInput, setTodoInput] = useState('');

  const addNewTodo = () => {
    const id = todos.length + 1;
    if (!todoInput) {
      return;
    }

    const todo = { title: todoInput, isCompleted: false, id };
    setTodos((_todos) => [..._todos, todo]);
    setTodoInput('');
  };

  const toggleTodo = (e) => {
    const todo = todos.find((todo) => todo.id === +e.target.name);
    todo.isCompleted = !todo.isCompleted;
    setTodos((_todos) => [..._todos]);
  };

  return (
    <>
      <header className='bg-primary py-6 shadow-md'>
        <h1 className='text-center text-secondary text-xl font-bold'>
          My Todo App
        </h1>
      </header>
      <main>
        <ul className='px-4 md:px-0 pb-24 mt-14 max-h-[60vh] overflow-y-scroll'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='bg-primary my-4 p-4 rounded-md max-w-[400px] mx-auto shadow-md'
            >
              <input
                type='checkbox'
                name={`${todo.id}`}
                checked={todo.isCompleted}
                onChange={toggleTodo}
              />
              <span className='text-secondary pl-5'>{todo.title}</span>
            </li>
          ))}
        </ul>
        <div className='fixed bg-[#213547] bottom-0 py-4 w-full'>
          <div className='flex px-4 gap-x-2 max-w-[400px] mx-auto'>
            <input
              type='text'
              name='todoInput'
              placeholder='Enter new todo'
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              className='bg-[rgba(0,0,0,.4)] text-secondary block h-[50px] px-3 basis-3/4 rounded-md'
            />
            <button
              className='w-[100px] h-[50px] flex items-center justify-center rounded bg-primary text-secondary font-bold transition-opacity hover:opacity-70'
              onClick={addNewTodo}
            >
              Add
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
