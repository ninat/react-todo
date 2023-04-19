import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, clearAll } from '../Todos/todosSlice';
import clsx from '../../utils/clsx';
import styles from './NewTodo.module.css';

const NewTodo = ({ value = '' }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.value = value;
    inputRef.current.focus();
  }, [value])

  const onAdd = useCallback(() => {
    const todo = inputRef.current.value.trim();
    if(todo) {
      dispatch(addTodo(todo));
    }
    inputRef.current.value = '';
  }, [dispatch]);

  const onReset = useCallback(() => dispatch(clearAll()), [dispatch]);

  return (
    <div className={styles.root}>
      <input ref={inputRef} type='text' className={clsx(styles.control, styles.input)} placeholder='Enter your task' />
      <button type='button' onClick={onAdd} title='Add' className={clsx(styles.control, styles.addBtn)}>Add</button>
      <button type='button' onClick={onReset} title='Clear All' className={clsx(styles.control, styles.clearBtn)}>Clear All</button>
    </div>
  )
};

export default NewTodo;
