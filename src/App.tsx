import 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App = () => (
  <div className='w-full h-screen flex items-center justify-center bg-slate-200 p-10'>
    <div className='w-full lg:w-[75%] h-full flex flex-col space-y-10 p-20 bg-white'>
      <Header />
      <TodoList />
    </div>
  </div>
);

export default App;
