import Todos from './components/Todos/Todos';
import NewTodo from './components/NewTodo/NewTodo';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <NewTodo />
    <Todos />
  </div>
);

export default App;
