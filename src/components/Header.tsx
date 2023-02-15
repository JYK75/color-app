import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { inpurtColor} from '../redux/store';

import { Link, useNavigate } from "react-router-dom";

import Values from 'values.js';

import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    try {
      let colors = new Values(inputValue).all(10);
      dispatch(inpurtColor(inputValue));
      setError(false);
      navigate(`/color`)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  
  return (
    <>
      <div className={styles.container}>
        <Link to='/'>
          <h1 className={styles.title}>Color Palette</h1>
        </Link>
        <form onSubmit={handleSubmit} className={styles.form_ctn}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          placeholder='#000000' className={`${error ? styles.error : ''}`} />
          <button className={styles.input_btn} type='submit'>
            submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Header;