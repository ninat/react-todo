import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { removeTask, toggleDone } from '../todosSlice';
import clsx from '../../../utils/clsx';
import styles from './Todo.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleDone(todo.id)), [dispatch, todo.id]);
  const onRemove = useCallback(() => dispatch(removeTask(todo.id)), [dispatch, todo.id]);

  return (
    <li className={styles.item}>
      <div className={styles.text}>
        <input type='checkbox' checked={todo.isDone} onClick={onToggle} id={todo.title} />
        <label htmlFor={todo.title} className={clsx(todo.isDone && styles.done, styles.label)}>{todo.title}</label>
      </div>
      <button type='button' onClick={onRemove} className={styles.removeBtn}><FontAwesomeIcon icon={faTrashCan} /></button>
    </li>
  )
};

export default Todo;
