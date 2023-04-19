import Todo from './Todo/Todo';
import { useSelector } from 'react-redux';
import { selectAllTodos } from './todosSlice';
import styles from './Todos.module.css';

const Todos = () => {
  const todos = useSelector(selectAllTodos);
  const completed = todos.filter((todo) => todo.isDone);

  return (
    <>
      <p className={styles.note}>
        <b>{`${completed.length}`}</b> of <b>{`${todos.length}`}</b> tasks done
      </p>
      <ul className={styles.list}>
        {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
};

export default Todos;
