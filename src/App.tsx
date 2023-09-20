import 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App = () => (
  <div className='w-full h-full flex items-center justify-center'>
    <div className='w-full lg:w-[75%] flex flex-col space-y-10 p-20'>
      <Header />
      <TodoList />
    </div>
  </div>
);

export default App;
